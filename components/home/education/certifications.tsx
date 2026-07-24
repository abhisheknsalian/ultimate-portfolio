import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold tracking-tight">
        Certifications
      </h3>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <div
            key={certification.name}
            className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm"
          >
            <h4 className="font-semibold">
              {certification.name}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {certification.issuer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}