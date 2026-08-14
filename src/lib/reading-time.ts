export const calculateReadingTime = (content: string, wordsPerMinute = 200): number => {
  const withoutCode = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^import\s.+$/gm, "")
    .replace(/<[^>]*>/g, "");
  const words = withoutCode.trim().split(/\s+/).filter(Boolean);
  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
};

export const formatReadingTime = (minutes: number): string => `${minutes} min read`;
