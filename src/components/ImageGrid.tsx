import React from 'react';
import ImageCard from './ImageCard';

type ImageGridProps = {
  recipes: { id: string; imageUrl: string; menuName: string; channelName: string }[];
};

const ImageGrid: React.FC<ImageGridProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map((recipe) => (
        <ImageCard
          key={recipe.id} {...recipe}
        />
      ))}
    </div>
  );
};

export default ImageGrid;