import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtml = path.join(distDir, 'index.html');

if (fs.existsSync(indexHtml)) {
  // Ensure /about-aditya-agrawat route works on any static hosting fallback
  const aboutDir = path.join(distDir, 'about-aditya-agrawat');
  fs.mkdirSync(aboutDir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(aboutDir, 'index.html'));
  console.log('✓ Successfully ensured /about-aditya-agrawat/index.html SPA entry exists in dist.');
}
