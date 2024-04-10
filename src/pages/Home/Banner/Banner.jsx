import { Carousel, Typography, Button } from "@material-tailwind/react";
import React from 'react';
import CarouselItem from "../../../components/CarouselItem";
 
 
const Banner = () => {
  return (
    <>
  
    <Carousel className="rounded-xl mt-[3rem] mb-[4rem]">
       <CarouselItem/>
       <CarouselItem/>
       <CarouselItem/>
    </Carousel>
    </>
  );
};

export default Banner;
