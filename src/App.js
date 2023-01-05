import "./App.css";

import React, { Component } from "react";
import ImageGallery from "./component/ImageGallery";
import Searchbar from "./component/Searchbar";
import axios from "axios";
import Button from "./component/Button";
import Modal from "./component/Modal";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 12,
    loading: false,
    showModal: false,
    src: null,
  };

  handleSubmit = (data) => {
    this.setState({ query: data, images: [], loading: true });
  };
  componentDidMount() {
    const apiUrl = `https://pixabay.com/api/?key=30734236-da96c42bd2f0fc4ef14e90cce&q=${this.state.query}&image_type=photo&per_page=12`;
    axios.get(apiUrl).then((resp) => {
      const allItem = resp.data.hits;
      this.setState({ images: allItem });
    });
  }

  componentDidUpdate() {
    const { loading } = this.state;
    if (loading) {
      return this.loadImages();
    }
  }
  loadImages = async () => {
    const { page, query } = this.state;
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=30734236-da96c42bd2f0fc4ef14e90cce&q=${query}&image_type=photo&per_page=12&page=${page}&lang="ru"`
      );
      const allItem = data.hits;
      this.setState(({ images }) => ({
        images: [...images, ...allItem],
        loading: false,
      }));
    } catch (error) {
      throw new Error(error);
    }
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      loading: true,
    }));
  };
  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src,
    }));
  };

  render() {
    const { src, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} showModal={this.toggleModal} />

        <Button onClick={this.handleLoadMore} />

        {this.state.showModal && (
          <Modal closeModal={this.toggleModal}>
            <img
              alt="img"
              src={src}
              style={{ height: "80vh", width: "100vw", borderRadius: "5px" }}
            />
          </Modal>
        )}
      </>
    );
  }
}
