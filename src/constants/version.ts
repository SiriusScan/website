export const SIRIUS_VERSION = "0.4.0";
export const LAST_UPDATED_DATE = "2025-10-11"; // This should be updated by your build process or CI/CD pipeline

export function getTimeAgo(date: string): string {
  const now = new Date();
  const lastUpdated = new Date(date);
  const diffInDays = Math.floor(
    (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}
