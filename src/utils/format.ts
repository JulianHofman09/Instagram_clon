export function formatLikes(count: number): string {
  return count.toLocaleString('es-AR');
}

export function formatLargeNumber(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace('.0', '')} mil`;
  }
  return count.toString();
}
