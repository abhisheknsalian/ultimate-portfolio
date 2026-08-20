export function detectTopic(
  text: string
): string | null {
  const message = text.toLowerCase();

  if (
    message.includes("cyber")
  )
    return "cyber-ai";

  if (
    message.includes("cloud")
  )
    return "cloud";

  if (
    message.includes("machine learning")
  )
    return "ml";

  if (
    message.includes("experience")
  )
    return "experience";

  if (
    message.includes("education")
  )
    return "education";

  if (
    message.includes("skills")
  )
    return "skills";

  return null;
}