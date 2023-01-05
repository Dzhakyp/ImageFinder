import React from "react";

const ImageGalleryItem = ({
  webformatURL,
  tags,
  id,
  largeImageURL,
  showModal,
  likes,
}) => {
  return (
    <li className="ImageGalleryItem" onClick={() => showModal(largeImageURL)}>
      <img
        className="ImageGalleryItem-image"
        id={id}
        src={webformatURL}
        alt={tags}
      />
      <p className="gallery_title_image">
        <span></span>
      </p>
      <p className="gallery_title">{likes}</p>
    </li>
  );
};
export default ImageGalleryItem;
