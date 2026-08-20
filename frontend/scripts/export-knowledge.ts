import fs from "node:fs";
import path from "node:path";

import { exportProjects } from "./exporters/projects";
import { exportExperience } from "./exporters/experience";
import { exportEducation } from "./exporters/education";
import { exportSkills } from "./exporters/skills";
import { exportCertifications } from "./exporters/certifications";
import { exportSite } from "./exporters/site";

const documents = [
  ...exportProjects(),
  ...exportExperience(),
  ...exportEducation(),
  ...exportSkills(),
  ...exportCertifications(),
  ...exportSite(),
];

const outputDir = path.join(process.cwd(), "knowledge");

fs.mkdirSync(outputDir, { recursive: true });

const outputFile = path.join(outputDir, "knowledge.json");

fs.writeFileSync(
  outputFile,
  JSON.stringify(documents, null, 2),
  "utf-8"
);

console.log(`✅ Exported ${documents.length} knowledge documents`);
console.log(`📄 ${outputFile}`);