// Get the base path for images
// Check hostname at runtime to determine if we need prefix
export function getBasePath(): string {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // Localhost: no prefix
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return '';
    }
  }
  // GitHub Pages or during SSR build: use prefix
  return '/vybs-lp';
}

// Helper function to get image path
export function getImagePath(path: string): string {
  const basePath = getBasePath();
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
