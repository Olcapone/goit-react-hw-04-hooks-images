import { Component } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

export default class App extends Component {
  static defaultProps = {
    initialName: "",
  };

  static propTypes = {
    initialName: PropTypes.string,
  };

  state = {
    pictureName: this.props.initialName,
  };

  handleFormSubmit = (imageName) => {
    if (imageName.trim() === "") {
      toast.info(" Enter anything word! ");
    } else {
      this.setState({ pictureName: imageName });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery pictureName={this.state.pictureName} />
        <ToastContainer />
      </>
    );
  }
}
