import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const folder = path.join(process.cwd(), 'src/assets');

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.png') {
      const input = path.join(folder, file);
      const output = path.join(folder, path.basename(file, '.png') + '.webp');

      sharp(input)
        .webp({ quality: 80 })
        .toFile(output)
        .then(() => console.log(`${file} converted to webp`))
        .catch(console.error);
    }
  });
});
