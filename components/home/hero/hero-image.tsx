export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-[560px] w-[430px]">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

        {/* Card */}
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[40px] border border-border bg-card/70 backdrop-blur-sm shadow-2xl">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-6xl">
            👨‍💻
          </div>

          <h3 className="mt-8 text-2xl font-bold">
            AI Engineer
          </h3>

          <p className="mt-2 max-w-xs text-center text-muted-foreground">
            Custom illustrated avatar coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}