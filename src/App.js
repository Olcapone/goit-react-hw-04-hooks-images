//import { Component } from "react";
//import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import useLocalStorage from "./utils/UseLocalStorage";

export default function App() {
  const [pictureName, setName] = useLocalStorage("pictureName", "");
  const handleFormSubmit = (imageName) => {
    if (imageName.trim() === "") {
      toast.info(" Enter anything word! ");
    } else {
      setName(imageName);
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery pictureName={pictureName} />
      <ToastContainer />
    </>
  );
}
