import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../store";

const Cards = () => {
  const [nfts] = useGlobalState("nfts");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [endMyCards, setEndMyCard] = useState(4);
  const [endOtherCards, setEndOtherCard] = useState(4);
  const [count] = useState(4);
  const [collection, setCollection] = useState([]);
  const [myCollection, setMyCollection] = useState([]);
  const [otherCollection, setOtherCollection] = useState([]);

  // const getCollection = () => {
  //   return nfts.slice(0, end);
  // };

  const filterCollection = () => {
    const myCollection = collection.filter(
      (nft) => nft.owner === connectedAccount
    );
    const otherCollection = collection.filter(
      (nft) => nft.owner !== connectedAccount
    );
    setMyCollection(myCollection);
    setOtherCollection(otherCollection);
  };

  useEffect(() => {
    setCollection(nfts);
  }, [nfts, endMyCards, endOtherCards]);

  useEffect(() => {
    if (collection) filterCollection();
  }, [collection, endMyCards, endOtherCards]);
  return (
    <div className="gradient-bg-cards">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-black text-3xl font-bold uppercase">
          {collection.length > 0 ? "My Cards" : "No Cards yet"}
        </h4>

        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
        gap-6 md:gaps-4 lg:gaps-3 py-2.5"
        >
          {myCollection.map((nft, i) => {
            if (i < endMyCards) return <Card key={i} nft={nft} />;
          })}
        </div>

        {myCollection.length - endMyCards > 0 ? (
          <div className="text-center my-5">
            <button
              className="shadow-lg shadow-black text-white 
                  bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2"
              onClick={() => setEndMyCard(endMyCards + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>

      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-black text-3xl font-bold uppercase">
          {collection.length > 0 ? "Other Cards" : "No Cards yet"}
        </h4>

        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4
        gap-6 md:gaps-4 lg:gaps-3 py-2.5"
        >
          {otherCollection.map((nft, i) => {
            if (i < endOtherCards) return <Card key={i} nft={nft} />;
          })}
        </div>

        {otherCollection.length - endOtherCards > 0 ? (
          <div className="text-center my-5">
            <button
              className="shadow-lg shadow-black text-white 
                  bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2"
              onClick={() => setEndOtherCard(endOtherCards + count)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Card = ({ nft }) => {
  const setNft = () => {
    setGlobalState("nft", nft);
    setGlobalState("showModal", "scale-100");
  };
  return (
    <div
      className="w-full shadow-xl shadow-black rounded-md overflow-hidden
     bg-gray-800 my-2 p-3"
    >
      <img
        className="h-100 w-full object-cover shadow-lg shadow-black
      rounded-lg mb-3"
        src={nft.metadataURI}
        alt={nft.title}
      />
      <h4 className="text-white font-semibold ">{nft.title}</h4>
      <p className="text-gray-400 text-sm my-1">{nft.description}</p>

      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">{nft.cost}</p>
        </div>

        <button
          className="shadow-lg shadow-black text-sm 
      bg-[#e32970] hover:bg-[#bd255f] rounded-full
      px-1.5 py-1"
          onClick={setNft}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
