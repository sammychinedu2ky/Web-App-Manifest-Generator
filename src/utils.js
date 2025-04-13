import pica from "pica";
import JSZip from "jszip";

// Resize images using pica
export async function resizeImage(file, sizes) {
  const picaInstance = pica();
  const resizedImages = [];

  for (const size of sizes) {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.src = URL.createObjectURL(file);

    await new Promise((resolve) => (img.onload = resolve));

    canvas.width = size.width;
    canvas.height = size.height;

    await picaInstance.resize(img, canvas);
    const blob = await picaInstance.toBlob(canvas, "image/png");
    resizedImages.push({ size, blob });
  }

  return resizedImages;
}

// Generate manifest.json dynamically
export function generateManifest(state, icons) {
  return {
    name: state.name,
    short_name: state.short_name,
    theme_color: state.theme_color,
    background_color: state.background_color,
    display: state.display,
    orientation: state.orientation,
    scope: state.scope,
    start_url: state.start_url,
    icons: icons.map((icon) => ({
      src: icon.src,
      sizes: `${icon.size.width}x${icon.size.height}`,
      type: "image/png",
    })),
  };
}

// Create ZIP file using JSZip
export async function createZip(manifest, images) {
  const zip = new JSZip();

  // Add manifest.json
  zip.file("manifest.json", JSON.stringify(manifest, null, 2));

  // Add images
  images.forEach((image, index) => {
    zip.file(`icons/icon-${image.size.width}x${image.size.height}.png`, image.blob);
  });

  return await zip.generateAsync({ type: "blob" });
}
