export default function HeroImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative h-[560px] w-[430px]">
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

        {/* Portrait Card */}
        <div className="relative flex h-full w-full items-center justify-center rounded-[40px] border border-border bg-card shadow-2xl">
          <span className="text-lg text-muted-foreground">
            Your Photo

            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}