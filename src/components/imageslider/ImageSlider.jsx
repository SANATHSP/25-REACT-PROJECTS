import React, { useEffect, useState } from "react";
//import icons
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageslider.css";
const ImageSlider = ({ url, limit = 9, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  // always have error and loading state for fetching the data from an api
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  //function to handle fetching the images from an api
  async function fetchImages({ getUrl }) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      if (data) {
        setImages(data);
        console.log(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  //loading is true
  if (loading) {
    <div>Loading...</div>;
  }
  //display error message
  if (errorMsg !== null) {
    return <div>Error Occured ! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((ImageItem, index) => (
            <img
              key={ImageItem.id}
              src={ImageItem.download_url}
              alt={ImageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              >
                {" "}
              </button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
