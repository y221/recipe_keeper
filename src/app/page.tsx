"use client";

import { NextPage } from 'next';
import ImageGrid from '../components/ImageGrid';

const HomePage: NextPage = () => {
  const images = [
    { id: '1', title: 'Image 1', imageUrl: '' },
    { id: '2', title: 'Image 2', imageUrl: '' },
    { id: '3', title: 'Image 3', imageUrl: '' },
    // 他の画像も同様に追加
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-10">Image Gallery</h1>
      <ImageGrid images={images} />
    </div>
  );
};

export default HomePage;