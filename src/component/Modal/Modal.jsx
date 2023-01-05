import React, { Component } from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const myModal = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
    // console.log("Modal componentDidMount");
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
    console.log("Modal componentWillUnmount");
  }

  onCloseModal = (e) => {
    if (e.target.classList.contains(styles.backdrop)) {
      this.props.closeModal();
    }
  };
  render() {
    return createPortal(
      <div className={styles.backdrop} onClick={this.onCloseModal}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      myModal
    );
  }
}
