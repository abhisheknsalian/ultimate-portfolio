# Avatar Engine

A small, framework-agnostic character controller for the 3D avatar
rendered in `components/home/hero/avatar/`. Built incrementally across
nine milestones (see git log: `feat(avatar): milestone 1` through `8`);
this document is milestone 9.

## Why this exists

The avatar used to be a static PNG animated purely via CSS transforms
(Framer Motion). It's now a rigged GLB
(`public/avatar/models/abhishek.glb`) rendered with React Three Fiber.
Rather than branching animation logic inline inside the R3F component
(the pattern the original PNG→GLB migration plan used and was
explicitly rejected for), state-driven motion lives in a small,
game-engine-style controller system that the React layer only *drives*
and *applies* - it doesn't compute anything itself.

## Directory structure

```
lib/avatar-engine/                  # framework-agnostic - no React, no JSX
  types.ts                          # AvatarPose, AvatarBlackboard, AvatarController
  capabilities.ts                   # detectRigCapabilities() - real morph-target inspection
  avatar-engine.ts                  # AvatarEngine: blackboard + controller registry + tick()
  controllers/
    posture-controller.ts           # AvatarState -> idle clip timeScale
    breathing-controller.ts         # continuous, additive, sine-wave scale
    gesture-controller.ts           # one-shot events (currently: greeting wave)
    blink-controller.ts             # capability-gated, inert on the current rig
    eye-tracking-controller.ts      # pointer-driven head yaw/pitch
  index.ts                          # public surface

components/home/hero/avatar/        # thin React/R3F bindings
  avatar-canvas.tsx                 # Canvas, camera, lighting (presentational)
  avatar-model.tsx                  # loads GLTF, applies resolved poses to the scene
  use-avatar-engine.ts              # owns one AvatarEngine, ticks it via useFrame
  use-avatar-bridge.ts              # the only file that reads the Zustand useAvatar store
  Avatar.tsx                        # public component: dynamic import, PNG loading fallback
  avatar-state.ts / use-avatar.ts   # existing Zustand contract - unchanged throughout
```

This is smaller than the originally-proposed architecture (no separate
`animation-system/` layer-blending module, no generic rig-abstraction
class). Each milestone only added what the next controller actually
needed - a real blend-mode system, a semantic bone-mapping abstraction,
etc. were deliberately not built, since nothing yet requires them (see
"Extending" below for what changes when something does).

## Data flow

```
useAvatar (Zustand, unchanged)         R3F's own pointer tracking
         |                                       |
         v                                       v
 use-avatar-bridge.ts             use-avatar-engine.ts's useFrame
         |                                       |
         +------------------> AvatarEngine <-----+
                             (commands: setPosture,
                              playGesture, setCapabilities,
                              setGazeTarget)
                                       |
                              engine.tick(dt) every frame
                                       |
                         each controller.tick(blackboard, dt)
                                       |
                    merged (object spread, in registration order)
                                       |
                                  AvatarPose
                                       |
                    avatar-model.tsx's onPose callback applies it:
              - idle AnimationAction.timeScale  (THREE facility)
              - group.scale (breathing)
              - group.rotation.z (gesture)
              - Head bone rotation, additive (eye tracking, on top
                of useAnimations' own mixer.update() output)
```

Two commands are driven by real, continuously-live sources rather than
one-off calls: `setGazeTarget` runs every frame from R3F's built-in
`state.pointer`, and `setCapabilities` runs once after the GLTF loads,
from real inspection of its meshes (not an assumption).

## Controllers

| Controller | Pose field(s) | Trigger | Status on `abhishek.glb` |
|---|---|---|---|
| PostureController | `idleTimeScale` | `AvatarState` via the bridge | Active |
| BreathingController | `breathingScale` | always-on, internal phase clock | Active |
| GestureController | `gestureRotationZ` | `engine.playGesture()`, called once on mount | Active |
| BlinkController | (none currently) | capability check (`eyeBlinkLeft`/`eyeBlinkRight` morph targets) | **Inert** - rig has zero morph targets |
| EyeTrackingController | `headYaw`, `headPitch` | pointer position, every frame | Active |

`AvatarState.WAVE` and `AvatarState.TYPING` (enum members in
`avatar-state.ts`) are never dispatched anywhere in the live app -
confirmed by grep before milestone 6. The greeting wave was
deliberately wired to a real trigger (mount) instead of the dead WAVE
state, so GestureController would have genuine, executed behavior
rather than being unreachable.

## Lifecycle

- **Construct**: `use-avatar-engine.ts` lazily creates one
  `AvatarEngine` per mounted `AvatarModel` (`useRef`, initialized once).
- **Capability detection**: runs once, in a `useEffect` keyed on the
  loaded scene, right after `useGLTF` resolves.
- **Tick**: every frame, inside R3F's `useFrame` - `setGazeTarget` is
  called, then `engine.tick(deltaTime)`, then the resolved pose is
  handed to `avatar-model.tsx`'s apply callback. No engine state lives
  in React state/Zustand; nothing here triggers a React re-render.
- **Commands**: `setPosture` (on every `AvatarState` change) and
  `playGesture` (once, on mount) run from `useEffect`s, decoupled from
  the tick loop.
- **Dispose**: there is currently no explicit `engine.dispose()`,
  because no controller allocates anything that outlives a normal
  garbage collection (no timers, no subscriptions) - the idle
  `AnimationAction`'s `fadeOut` cleanup in `avatar-model.tsx` already
  handles the one resource that does need explicit teardown. If a
  future controller needs a timer or subscription (e.g. a
  randomized blink scheduler once BlinkController becomes real), it
  should own and clean up that resource itself, and the engine should
  gain a `dispose()` that calls into controllers that need one.

## Extending

To add a new controller:
1. Add whatever pose field(s) it produces to `AvatarPose` in `types.ts`
   (and a default in `avatar-engine.ts`'s `DEFAULT_POSE`).
2. Add any new blackboard state it needs to read (and a matching
   `AvatarEngine` command to write it, if driven from outside a tick).
3. Implement `AvatarController` and register it in `AvatarEngine`'s
   `controllers` array.
4. Apply its new pose field(s) in `avatar-model.tsx`'s `useAvatarEngine`
   callback.

Two controllers currently write to genuinely overlapping ground (the
`Head` bone: the baked idle clip via `useAnimations`, and
`EyeTrackingController` via `headYaw`/`headPitch`) - resolved today by
ordering (the mixer's `useFrame` is registered first) and an additive
(`+=`) apply instead of an absolute set. If a third controller ever
needs to write to the same bone, or if two controllers need to write
the *same* pose field with different priorities, that's the point
where a real weighted/masked blend system (as sketched in the earlier
architecture proposal) becomes justified - not before.

## Known follow-ups (not built here, since they'd be unreachable now)

- **Blinking**: needs the model re-exported with `eyeBlinkLeft` /
  `eyeBlinkRight` morph targets. Once present, `BlinkController`'s
  capability check will pass and it only needs its scheduling/weight
  logic implemented - the gate is already wired end-to-end.
- **Lip sync**: needs (a) viseme morph targets on the model, and (b) a
  phoneme/amplitude timing source - `use-speech.ts`'s
  `SpeechSynthesisUtterance` doesn't expose one today. Both are
  prerequisites, not code changes to this engine.
- **Camera framing / eye-tracking feel**: implemented against the raw
  glTF data and R3F/three.js documentation, not visually verified - no
  browser was available in this session. Worth a visual pass before
  relying on the current camera (`avatar-canvas.tsx`'s `<Bounds>`
  auto-fit) or the eye-tracking sign/magnitude constants
  (`eye-tracking-controller.ts`).

## Performance

Verified in this session:
- `next build` passes at every milestone (production build, full type
  check).
- Dev server smoke-tested after every milestone (`HTTP 200`, no
  server-side runtime errors).
- The GLB (4.4MB) is not part of the initial page bundle: `Avatar.tsx`
  dynamically imports the Canvas with `ssr: false` and a PNG loading
  fallback, so it only starts fetching client-side, after first paint.
- Total built client chunk output (`next build`'s `.next/static/chunks`)
  is ~2.1MB across the whole app, including the tree-shaken three.js/
  R3F/drei code paths actually used (`Canvas`, `useGLTF`,
  `useAnimations`, `Bounds`) - not their full package size (three.js's
  package alone is ~25MB unminified/untree-shaken).
- Code-level audit of the per-frame hot path
  (`AvatarEngine.tick()`, `setGazeTarget()`): both allocate a small
  new object every frame (object-spread pose merging, and a fresh
  `{x, y}` for gaze target). At five controllers this is minor, but
  it's a real, known inefficiency - worth switching to in-place
  mutation of a shared pose object if controller count grows enough
  for it to show up in a profile.

Not possible in this session, and worth doing before treating this as
production-verified:
- No browser was available, so there's no actual frame-time/FPS
  measurement, no confirmation the model renders at all (vs. just
  loading without error), and no visual check of camera framing,
  lighting, or the eye-tracking/breathing/gesture motion quality.
- Recommended next step: open the page in a real browser, use Chrome
  DevTools' Performance panel (or drei's `<Stats>` / a tool like
  r3f-perf) to check frame time with the avatar in view, and repeat on
  a mid-tier mobile device or throttled CPU, since a continuously
  rendering skinned mesh is materially more expensive than the static
  image it replaced.
