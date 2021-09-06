import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header backButton={true} title={"Rappi4"} />
      <Footer />
    </div>
  );
};

export default Home;
