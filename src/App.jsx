import { useEffect, useState } from "react";
import { getAllNFTs, isWalletConnected } from "./Blockchain.services";
import Alert from "./components/Alert";
import Cards from "./components/Cards";
import CreateNFT from "./components/CreateNFT";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import ShowNFT from "./components/ShowNFT";
import Transactions from "./components/Transactions";
import UpdateNFT from "./components/UpdateNFT";

const App = () => {
  const [tab, setTab] = useState(2);
  useEffect(async () => {
    await isWalletConnected();
    await getAllNFTs();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="gradient-bg-hero flex-1">
        <Header setTab={setTab} />
        {tab === 1 && <Hero />}
        {tab === 2 && <Cards setTab={setTab} />}
        {tab === 3 && <Transactions />}
      </div>
      {/* <Footer /> */}
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  );
};

export default App;
