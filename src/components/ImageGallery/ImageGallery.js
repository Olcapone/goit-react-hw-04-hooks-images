import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "../ImageGallery/ImageGallery.module.css";
import Api from "../../Api/Api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import ImageNotFound from "../ImageNotFound/ImageNotFound";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

export default class ImageGallery extends Component {
  state = {
    pictures: null,
    page: 1,
    status: "idle",
    error: null,
  };

  componentDidUpdate(prevProps, PrevState) {
    const { pictureName } = this.props;
    const { page } = this.state;

    if (prevProps.pictureName !== pictureName) {
      this.setState({ status: "pending", page: 1 });

      toast.info(" Waiting... ");

      Api({ pictureName, page })
        .then((pictures) => {
          if (pictures.total === 0) {
            toast.error(`Image ${pictureName} not found`);
            this.setState({ status: "reject" });
            return;
          }

          this.setState((prevState) => ({
            pictures: pictures.hits,
            status: "resolved",
            page: prevState.page + 1,
          }));
        })
        .catch((error) =>
          this.setState({
            error: `Image not found ${pictureName}`,
            status: "reject",
          })
        );
    }
  }

  clickOnLoad = () => {
    const { pictureName } = this.props;
    const { page } = this.state;

    Api(pictureName, page).then((pictures) => {
      let nextPicture = pictures.hits;

      this.setState((prevState) => ({
        pictures: [...prevState.pictures, ...nextPicture],
        status: "resolved",
        page: prevState.page + 1,
      }));

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  render() {
    const { pictures, status } = this.state;

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
          <Button name={"Load more"} onLoadMore={this.clickOnLoad} />
        </>
      );
    }
  }
}
