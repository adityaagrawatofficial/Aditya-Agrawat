import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtml = path.join(distDir, 'index.html');

const routes = [
  'about-aditya-agrawat',
  'services',
  'projects',
  'contact',
  'faq',
  'digital-marketing',
  'website-development',
  'app-development',
  'seo-content',
  'social-media-promotion',
  'digital-products',
];

if (fs.existsSync(indexHtml)) {
  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexHtml, path.join(routeDir, 'index.html'));
  }
  console.log(`✓ Successfully generated fallback index.html for all ${routes.length} SPA routes in dist.`);
}
