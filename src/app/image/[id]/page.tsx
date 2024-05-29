"use client";

import { NextPage } from 'next';
import { useSearchParams, usePathname, useParams } from "next/navigation";

const ImageDetail: NextPage = () => {
  // 動的ルーティングのパラメータを取得
  const params = useParams();

  // ダミーデータ
  const images = [
    { id: '1', title: 'Image 1', imageUrl: '' },
    { id: '2', title: 'Image 2', imageUrl: '' },
    { id: '3', title: 'Image 3', imageUrl: '' },
    // 他の画像も同様に追加
  ];

  const image = images.find((img) => img.id === params.id);

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-10">{image.title}</h1>
      <div className="flex justify-center">
        <img src={image.imageUrl} alt={image.title} />
      </div>
    </div>
  );
};

export default ImageDetail;

