import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <img
        src={images[selectedImage]}
        alt={`${title} - Image ${selectedImage + 1}`}
        className="w-full h-96 object-cover rounded"
      />
      <div className="flex space-x-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 flex-shrink-0 ${
              selectedImage === index ? "border-2 border-cyan-300" : ""
            }`}
          >
            <img
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
