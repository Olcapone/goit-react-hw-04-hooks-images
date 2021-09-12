import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../utils/UseLocalStorage";

import s from "../ImageGallery/ImageGallery.module.css";
import Api from "../../Api/Api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import ImageNotFound from "../ImageNotFound/ImageNotFound";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

export default function ImageGallery({ pictureName }) {
  const [pictures, setPicture] = useState([]);
  const [page, setPage] = useLocalStorage("page", 1);
  const [status, setStatus] = useLocalStorage("status", "idle");
  const [error, saveError] = useState("error", null);
  const prevPicturesRef = useRef();

  useEffect(() => {
    setPage(1);
    setPicture([]);
  }, [pictureName]);

  useEffect(() => {
    if (pictureName === "") {
      return;
    }

    toast.info(" Waiting... ");
    setStatus("pending");

    Api(pictureName, page)
      .then((res) => {
        if (res.total === 0) {
          setStatus("reject");
          toast.error(`Image ${pictureName} not found`);
        } else {
          prevPicturesRef.current = res.hits;

          pictures.length === 0
            ? setPicture(prevPicturesRef.current)
            : setPicture((pictures) => [
                ...pictures,
                ...prevPicturesRef.current,
              ]);

          setStatus("resolved");
        }
      })
      .catch((error) => {
        setStatus("reject");
        saveError(`Image not found ${pictureName}`);
        return error;
      });
  }, [pictureName, page]);

  const clickOnLoad = () => {
    setPage((page) => page + 1);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (status === "idle") {
    return <></>;
  }

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "reject") {
    return <ImageNotFound />;
  }

  if (status === "resolved") {
    return (
      <>
        <ul className={s.ImageGallery}>
          {pictures.map((image) => (
            <ImageGalleryItem
              key={image.id}
              largeImg={image.largeImageURL}
              imageURL={image.previewURL || image.webformatURL}
              tags={image.tags}
            />
          ))}
        </ul>
        <Button name={"Load more"} onLoadMore={clickOnLoad} />
      </>
    );
  }
}
