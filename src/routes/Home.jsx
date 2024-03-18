import React from "react";
import CoinSearch from "../components/CoinSearch";
import Trending from "../components/Trending";

function Home(props) {
  const { coins } = props;
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
}

export default Home;
