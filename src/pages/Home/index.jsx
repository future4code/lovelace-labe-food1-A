import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RequestCard from "../../components/RequestCard";

const Home = () => {
  return (
    <div>
      <Header backButton title={"Rappi4"} />
      <RequestCard/>
      <Footer />
    </div>
  );
};

export default Home;
