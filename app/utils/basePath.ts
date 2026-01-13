// Get the base path for images
// Use NODE_ENV to determine dev vs production
export function getBasePath(): string {
  // Development mode (npm run dev): no prefix
  if (process.env.NODE_ENV === 'development') {
    return '';
  }
  // Production mode (GitHub Pages): use prefix
  return '/vybs-lp';
}

// Helper function to get image path
export function getImagePath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
