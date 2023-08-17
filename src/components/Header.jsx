import React from "react";
import footballLogo from "../assets/football-illustration-file-sports-design-logo-free-png.webp";
import { connectWallet } from "../Blockchain.services";
import { truncate, useGlobalState } from "../store";

const Header = ({ setTab }) => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img className="w-32 cursor-pointer" src={footballLogo} alt="Logo" />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none justify-between items-center flex-initial"
      >
        <li className="mx-20 cursor-pointer" onClick={() => setTab(1)}>
          Create
        </li>
        <li className="mx-20 cursor-pointer" onClick={() => setTab(2)}>
          Cards
        </li>
        <li className="mx-20 cursor-pointer" onClick={() => setTab(3)}>
          Transactions
        </li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
