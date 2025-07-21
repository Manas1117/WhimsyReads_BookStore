import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { useState, useEffect } from "react";

import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.Category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-auto my-1 container md:px-28 ">
        <div>
          <h1 className="px-8 py-5 text-3xl font-semibold  md:px-0 md:py-0">
            Free Novels
          </h1>
          <p className="text-lg font-medium px-8 py-5 md:px-0 md:py-0">
            Explore WhimsyReads' Free Novel Section, where enchanting stories
            and captivating tales await. From heartwarming romance to thrilling
            mysteries, dive into a world of imagination and adventure, all at no
            cost.{" "}
            <span className="text-orange-600">
              Discover your next favorite book today!
            </span>
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((items) => (
              <Cards items={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
