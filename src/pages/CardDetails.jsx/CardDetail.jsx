import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';

const CardDetails = () => {
  const [estateData, setEstateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchEstateData = async () => {
      try {
        const response = await fetch(`https://real-state-server-yrcd.onrender.com/residential/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setEstateData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchEstateData();
  }, []);

  console.log(estateData);

  if (isLoading) {
    return         <div className="flex justify-center items-center h-screen">
    <span className="loading loading-ring loading-lg"></span>
 </div>;
  }

  return (
    <>
      <div className="flex md:flex-row justify-center items-center gap-12">
        <div className="flex flex-col items-center justify-center w-full px-14 py-[73px] md:p-5 bg-gray rounded-[16px]">
          <img className="w-[92%] object-cover" src={estateData.image} alt="" loading="lazy" />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-[11px]">
            <h1 className="text-gray-900 font-worksans !font-playfairdisplay text-[40px] font-bold md:text-[38px] sm:text-4xl">{estateData.estate_title}</h1>
            <p className="text-gray-900 font-worksans  text-xl font-medium">{estateData.segment_name}</p>
          </div>
          <div className="self-stretch h-px w-full mt-[22px] bg-gray-900_26"></div>
          <p className="text-gray-900_cc font-worksans mt-[23px] !text-gray-900 !font-normal leading-[26px] text-base font-medium">
            <span className="text-gray-900 font-bold">Description :</span> {estateData.description}
          </p>
          <div className="flex items-center mt-6 gap-4">
            <h2 className="text-gray-900 font-worksans self-end mb-[5px] !font-bold text-base font-semibold">Facilities : </h2>
            <div className="flex">
              <div className="flex gap-3">
                {estateData.facilities.map((facility, index) => (
                  <button key={index} className="font-medium min-w-[136px] flex items-center justify-center text-center cursor-pointer rounded-[16px] h-[33px] px-4 text-base bg-green-100 text-green-700">{facility}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="self-stretch h-px w-full mt-6 bg-gray-900_26"></div>
          <div className="flex justify-between w-[65%] md:w-full mt-[23px] gap-[59px]">
            <div className="flex flex-col items-start justify-center gap-[19px]">
              <p className="text-gray-900_cc font-worksans mt-[3px] !text-gray-900_b2 !font-normal text-base font-medium">
                <span className='text-xl font-semibold'>Price:</span> ${estateData.price}
              </p>
              <p className="text-gray-900_cc font-worksans !text-gray-900_b2 !font-normal text-base font-medium">
                <span className='text-xl font-semibold'>Status: </span> {estateData.status}
              </p>
              <p className="text-gray-900_cc font-worksans !text-gray-900_b2 !font-normal text-base font-medium">
                <span className='text-xl font-semibold'>Area:</span> {estateData.area}
              </p>
              <p className="text-gray-900_cc font-worksans !text-gray-900_b2 !font-normal text-base font-medium">
                <span className='text-xl font-semibold'>Location: </span>{estateData.location}
              </p>
            </div>
          </div>
          <div className="flex mt-8 gap-4">
            <Link to="/">
              <button className='btn btn-info'>Go to home</button>    
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
