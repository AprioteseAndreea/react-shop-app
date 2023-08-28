import React from "react";
import Products from "../products/products";
import Banner from "../banner/banner";
import Link from 'next/link';

const Dashboard = () =>{
 
  return (
    <>
    <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      <Link href="/product/123">
        <a>Product 123</a>
      </Link>
     <Products/>
    </>
  );
};

export default Dashboard;
