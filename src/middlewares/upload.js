import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }
  console.log(req.file.path);
  try {
    const inputPath = req.file.path;
    const outputPath = `${inputPath}_thumb.png`;

    await sharp(inputPath)
      .resize(160, 160)
      .png()
      .toFile(outputPath);
  return next();
   } catch (error) {
    next(error);
  }
};

export {createThumbnail};