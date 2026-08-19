const stats = [
  {
    value: "M.Sc.",
    label: "Data Science",
  },
  {
    value: "AI",
    label: "Machine Learning",
  },
  {
    value: "Cloud",
    label: "Data Engineering",
  },
  {
    value: "Berlin",
    label: "Germany",
  },
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
        >
          <h3 className="text-4xl font-bold tracking-tight">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}