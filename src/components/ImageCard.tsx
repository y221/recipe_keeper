import React from 'react';
import Link from 'next/link';

type ImageCardProps = {
  id: string;
  imageUrl: string;
  menuName: string;
  channelName: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ id, imageUrl, menuName, channelName }) => {
  return (
    
    <Link href={`/recipe/${id}`} className="card w-full bg-base-100 shadow-xl">
    <figure>
      <img src={imageUrl} className="w-full" />
    </figure>
    <div className="card-body">
      <p className="menu-name text-base font-semibold">{menuName}</p>
      <p className="channel-name text-sm text-gray-500">{channelName}</p>
    </div>
  </Link>
  );
};

export default ImageCard;