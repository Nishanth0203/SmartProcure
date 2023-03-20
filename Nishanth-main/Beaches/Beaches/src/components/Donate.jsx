import { useState, useContext } from "react";
import "./Donate.css";
import axios from "../context/axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
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
        <Navbar />
      </div>
      <div>
        <div className="register">
          <div className="container">
            <div className="title">Donation Form</div>
            <div className="content">
              <form action="#">
                <div 
                  className="user-details" 
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end"
                  }}
                
                >


                <div className="input-box">
                    <span className="details public">Public Address</span>
                    <input
                      type="text"
                      placeholder="Enter your Public Address"
                      style={{ width: "500px" }}
                      required
                      onChange={(e) => setPublicAddress(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Donation Amount</span>
                    <input
                      type="Number"
                      placeholder="Enter your Price"
                      required
                      onChange={(e) => setDonation(e.target.value)}
                    />
                  </div>
                 
                 
                  
                </div>
                <div className="button">
                  <input
                    type="submit"
                    onClick={(e) => submitHandler(e)}
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Sell;
