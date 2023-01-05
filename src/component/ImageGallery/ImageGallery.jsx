import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ images, showModal }) {
  const galleryItem = images.map((item) => (
    <ImageGalleryItem showModal={showModal} key={item.id} {...item} />
  ));
  return (
    <div className="container">
      <ul className="ImageGallery">{galleryItem}</ul>
    </div>
  );
}
