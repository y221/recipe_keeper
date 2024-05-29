"use client";

import React from 'react';
import ImageCard from './ImageCard';

type ImageGridProps = {
  images: { id: string; title: string; imageUrl: string }[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((image) => (
        <ImageCard key={image.id} id={image.id} title={image.title} imageUrl={image.imageUrl} />
      ))}
    </div>
  );
};

export default ImageGrid;