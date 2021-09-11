import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.clickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.clickEscape);
  }

  clickEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  clickOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.clickOnOverlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
