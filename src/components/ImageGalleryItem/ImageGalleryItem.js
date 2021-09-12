//import { Component } from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import useLocalStorage from "../../utils/UseLocalStorage";

import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ imageURL, tags, largeImg }) {
  const [showModal, setStatus] = useLocalStorage("showModal", false);

  const toggleModal = () => {
    setStatus(!showModal);
  };

  return (
    <>
      <li className={s.ImageGalleryItem} onClick={toggleModal}>
        <img src={imageURL} alt={tags} className={s.ImageGalleryItemImage} />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImg} alt={tags} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string,
  tags: PropTypes.string,
  largeImg: PropTypes.string,
};
