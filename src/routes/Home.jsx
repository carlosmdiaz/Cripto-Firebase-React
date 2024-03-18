import React from "react";
import CoinSearch from "../components/CoinSearch";

function Home(props) {
  const { coins } = props;
  return (
    <div>
      <CoinSearch coins={coins} />
    </div>
  );
}

export default Home;
