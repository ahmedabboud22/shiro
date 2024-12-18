"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: "Idea Development",
    name: "Transforming innovative concepts into practical and profitable business models",
    imgSrc: "/images/wework/abusayah.webp",
  },
  {
    profession: "Market Analysis",
    name: "Conducting in-depth research to identify opportunities and trends within target markets.",
    imgSrc: "/images/wework/abusayah.webp",
  },
  {
    profession: "Project Management",
    name: "Overseeing projects from inception to completion, ensuring seamless execution.",
    imgSrc: "/images/wework/abusayah.webp",
  },
  {
    profession: "Brand Positioning",
    name: "Building strong, recognizable brands that resonate with target audiences.",
    imgSrc: "/images/wework/abusayah.webp",
  },
  {
    profession: "Growth Optimization",
    name: "Developing strategies to scale businesses and maximize returns.",
    imgSrc: "/images/wework/abusayah.webp",
  },
  {
    profession: "Operational Excellence",
    name: "Providing ongoing management support to enhance efficiency & sustainability.",
    imgSrc: "/images/wework/abusayah.webp",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-wework py-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center">
            <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
              Investment Strategies and Services
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
              Investment Strategies and Services
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
              Investment Strategies and Services
            </h3>
          </div>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                <div className="relative">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={182}
                    height={182}
                    className="inline-block m-auto overflow-hidden"
                  />
                  {/* <Image
                    src={"/images/wework/linkedin.svg"}
                    alt="greenbg"
                    width={120}
                    height={120}
                    className=" absolute inline-block position-linkedin"
                  /> */}
                </div>
                <h4 className="text-lg px-2 font-bold pt-14">{items.name}</h4>
                <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                  {items.profession}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
