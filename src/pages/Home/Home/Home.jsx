import React from 'react';
import Banner from '../Banner/Banner';
import How_it_works from '../howItworks/How_it_works';
import Services from '../../Services/Services';
import Brands from '../Brands/Brands';
import Reveiws from '../Review/Reveiws';

const reveiwsPromise= fetch('/reviews.json').then(res=>res.json());


const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <How_it_works></How_it_works>
    <Services></Services>
    <Brands></Brands>
    <Reveiws  reveiwsPromise={reveiwsPromise}></Reveiws>
    </div>
  );
};

export default Home;