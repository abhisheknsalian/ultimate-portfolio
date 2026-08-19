import type { Mesh, Object3D } from "three";

export interface RigCapabilities {
  morphTargets: Set<string>;
}

/**
 * Walks a loaded glTF scene graph and collects every morph target name
 * exposed by any mesh in it. Real inspection of the actual asset - not
 * a guess - so controllers can gate themselves on what the currently
 * loaded rig genuinely supports.
 */
export function detectRigCapabilities(root: Object3D): RigCapabilities {
  const morphTargets = new Set<string>();

  root.traverse((node) => {
    const dictionary = (node as Mesh).morphTargetDictionary;

    if (dictionary) {
      for (const name of Object.keys(dictionary)) {
        morphTargets.add(name);
      }
    }
  });

  return { morphTargets };
}

export function hasMorphTargets(
  capabilities: RigCapabilities | null,
  names: readonly string[]
): boolean {
  if (!capabilities) {
    return false;
  }

  return names.every((name) => capabilities.morphTargets.has(name));
}
