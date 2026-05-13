const ASSETS_BASE_URL =
  process.env.NEXT_PUBLIC_ASSETS_SERVER_URL ||
  'https://kiwizu3.github.io/meridian-ar-data/public';

export function assetUrl(path: string) {
  const base = ASSETS_BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;
}