import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Trending() {
  const url = "https://api.coingecko.com/api/v3/search/trending";
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const request = async () => {
      await axios.get(url).then((response) => {
        setTrending(response.data.coins);
      });
    };
    request();
  }, []);
  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin) => {
          return (
            <div
              key={coin.item.id}
              className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
            >
              <div className="flex items-center justify-between w-full">
                <Link to={`/coin/${coin.item.id}`}>
                  <div className="flex">
                    <img
                      className="mr-4 rounded-full"
                      src={coin.item.small}
                      alt={coin.item.id}
                    />
                    <div>
                      <p className="font-bold">{coin.item.name}</p>
                      <p>{coin.item.symbol}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center">
                  <img
                    src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                    alt="Bitcoin Logo"
                    className="w-4 mr-2"
                  />
                  <p>{coin.item.price_btc.toFixed(10)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
