import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Banner from './Banner/Banner';
import EsateCard from './Estate/EsateCard';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
  const [estateData, setEstateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://real-state-server-yrcd.onrender.com/residential');
        setEstateData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
           <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {estateData.map((estate) => (
            <EsateCard key={estate.id} estate={estate} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
