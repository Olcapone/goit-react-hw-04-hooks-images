import { Component } from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { imageURL, tags, largeImg } = this.props;
    return (
      <>
        <li className={s.ImageGalleryItem} onClick={this.toggleModal}>
          <img src={imageURL} alt={tags} className={s.ImageGalleryItemImage} />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImg} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string,
  tags: PropTypes.string,
  largeImg: PropTypes.string,
};
