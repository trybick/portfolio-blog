const sharp = require('sharp');
const path = require('path');

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#171923"/>
  <text x="600" y="210" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="80" font-weight="700" fill="#cbd5e0">Tim Rybicki</text>
  <text x="600" y="285" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="34" fill="#718096">passionate about code and UX</text>
  <rect x="390" y="370" width="420" height="64" rx="10" fill="#0096c7"/>
  <text x="600" y="414" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#ffffff">View Portfolio → timr.dev</text>
</svg>
`;

const outputPath = path.join(__dirname, '..', 'static', 'og-image.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(info => {
    console.log(`Generated ${outputPath} (${info.width}x${info.height})`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
