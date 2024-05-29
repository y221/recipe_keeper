"use client";

import React from 'react';
import Link from 'next/link';

type ImageCardProps = {
  id: string;
  title: string;
  imageUrl: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ id, title, imageUrl }) => {
  return (
    <Link href={`/image/${id}`} className="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default ImageCard;