/**
 * Calculate reading time for a given text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 wpm)
 * @returns Reading time in minutes, rounded up
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  // Remove HTML tags if present
  const plainText = content.replace(/<[^>]*>/g, "");

  // Remove code blocks (they're read slower but let's keep it simple)
  const textWithoutCode = plainText.replace(/```[\s\S]*?```/g, "");

  // Split on whitespace and filter empty strings
  const words = textWithoutCode
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const wordCount = words.length;
  const minutes = wordCount / wordsPerMinute;

  // Round up to nearest minute, minimum 1 minute
  return Math.max(1, Math.ceil(minutes));
}

/**
 * Format reading time as a human-readable string
 * @param minutes - Reading time in minutes
 * @returns Formatted string like "5 min read"
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
