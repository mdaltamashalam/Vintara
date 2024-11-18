import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation}/>
      <div className="pb-10">
      <h1 className="max-w-[600px] text-base text-lightText mb-2">
        <span className="text-primeColor font-semibold text-lg">Vintara</span> is your ultimate destination for all things trendy and affordable. 
        Discover a vast selection of products, from fashion to electronics, carefully curated for every style and need. 
        Our easy-to-use platform ensures a seamless shopping experience, wherever you are. 
        With exclusive deals and fast delivery, Vintara brings the world’s best products to your doorstep. 
        Shop with us and experience the future of online shopping today!
      </h1>

        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
