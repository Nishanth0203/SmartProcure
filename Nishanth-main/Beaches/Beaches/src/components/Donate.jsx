import { useState, useContext } from "react";
import "./Donate.css";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import SidebarRight from "./SidebarRight";
import { ethers } from "ethers";

const Sell = () => {
  const [PublicAddress, setPublicAddress] = useState(null);
  const [FirstName, setFirstName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [Donation, setDonation] = useState(0);
  const [Organisation, setOrganisation] = useState(null);
  const [Type, setType] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);

  const { contract } = useContext(AuthContext);

  async function submitHandler(e) {
    e.preventDefault();
    let res;

    try {
      const transaction = await contract.funding({
        value: ethers.utils.parseEther(`${Donation}`),
      });
      res = await transaction.wait();
      console.log("transaction : ", res.transactionHash);
      console.log(res)
    } catch (error) {
      alert(error?.code);
      console.log(error.code);
      return;
    }

    const sendData = {
      PublicAddress,
      TransactionHash: res?.transactionHash,
      Donation,
    };

    console.log(sendData);

    try {
      const res = await axios.post(`/putData`, sendData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <Header />
        <SidebarRight />
        <Navbar />
        <Sidebar />
        <Footer />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Sell;
