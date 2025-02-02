// import React, {useState} from 'react';
// import '../../Booking.css';
// import logo from "../../assets/Picture1.png";
// import logo1 from "../../assets/account-benefits 1.png"
// import Navbar from '../../Components/Navbar.jsx';
// import logo2 from "../../assets/add_plus.png";
// import logo3 from "../../assets/cash_icon.png";

// const Booking = () => {

//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const[isPopupVisible1, setIsPopupVisible1] = useState(false);

//   const handleCashChange = (e) => {
//     if (e.target.checked) {
//       setIsPopupVisible(true);
//     } else {
//       setIsPopupVisible(false);
//     }
//   };

//   const handleCardChange = (e) => {
//     if (e.target.checked) {
//       setIsPopupVisible1(true);
//     } else {
//       setIsPopupVisible1(false);
//     }
//   };


//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   const closePopup1 = () => {
//     setIsPopupVisible1(false);
//   };

  

//   return (
//     <div>

//     <header className="header">
//       <div className="logo-container">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <h1 className="header-title">SoT Railways Ticketing System</h1>
//       <div className="admin-container">
//         <p className="admin-text">ADMIN</p>
//       </div>
//     </header>

    
//     <Navbar />

//     <div className="main-container">
//   <div className="booking-section">
   
//     <div className="complete-booking">Complete Your Booking</div>

//   <div className="booking-card">
//     {/* Date */}
//     <div className="booking-date">Friday, January 24, 2025</div>

//     {/* Booking Details */}
//     <div className="booking-content">
//       {/* Station Details */}
//       <div className="station-details">
//         <div className="station">
//           <div className="station-circle"></div>
//           <p className="station-name">Tokyo Station</p>
//         </div>
//         < div className="station-line"></div>
     
//         <div className="travel-time">1h 05 mins</div>
//         <div className="station">
//           <div className="station-circle2"></div>
//           <p className="station-name2">Yokohama Station</p>
//         </div>
//       </div>

//       {/* Image */}
//       <div className="illustration">
//         <img src={logo1} alt="Traveler Illustration" />
//       </div>
//     </div>
//   </div>

//   <div className="proceed-to-payment">
//   <button className="payment-button">Proceed to Payment</button>
// </div>


// </div>

// <div className="fare-summary">

//   <div className="complete-booking">Fare Summary</div>
//   <div className="fare-card">
//   <div className="fare-item">
//   <img className="fare-icon" src={logo2} alt="Plus Icon" />
//     <span className="fare-label">Base Fare</span>
//     <span className="fare-amount">¥500</span>
//   </div>
//   <hr></hr>
//   <div className="fare-item">
//   <img className="fare-icon" src={logo2} alt="Plus Icon" />
//     <span className="fare-label">Taxes</span>
//     <span className="fare-amount">¥50</span>
//   </div>
//   <hr></hr>
//   <div className="fare-item total">
//     <span className="fare-label">Total Amount</span>
//     <span className="fare-amount">¥550</span>
//   </div>

//   <div>
//   <div className="payment-method">
//         <img className="payment-icon" src={logo3} alt="Payment Icon" />
//         <span className="payment-label">Payment Method</span>
//       </div>

//       <div className="payment-options">
//         <div className="payment-option">
//           <input type="checkbox" id="cash" name="payment-method" value="cash" onChange={handleCashChange} />
//           <label htmlFor="cash">Cash</label>
//         </div>
//         <div className="payment-option">
//           <input type="checkbox" id="card" name="payment-method" value="card" onChange={handleCardChange} />
//           <label htmlFor="card">Card</label>
//         </div>
//       </div>

//   </div>



//   </div>

 
 


// </div>




// </div>

// {isPopupVisible1 && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <img className="popup-icon" src={logo} alt="Popup Icon" />
//             <p>Amount to be paid: ¥ 550</p>
//             <label>Enter Card Details</label>
//             <div className="input-container">
//               {/* <span className="yen-symbol">¥</span> */}
//               <input type="text" className="amount-input" />
//             </div>
//             <button className="popup-submit">Submit</button>
//             <button className="popup-cancel" onClick={closePopup1}>Cancel</button>


//              </div>
          
//         </div>
//       )}

// {isPopupVisible && (
//         <div className="popup-overlay">
//           <div className="popup">
//             <img className="popup-icon" src={logo} alt="Popup Icon" />
//             <p>Amount to be paid: ¥ 550</p>
//             <label>Enter Amount</label>
//             <div className="input-container">
//               <span className="yen-symbol">¥</span>
//               <input type="text" className="amount-input" />
//             </div>
//             <button className="popup-submit">Submit</button>
//             <button className="popup-cancel" onClick={closePopup}>Cancel</button>


//              </div>
          
//         </div>
//       )}

// </div>
//   );
// };

// export default Booking;

import logo from "../../assets/account-benefits 1.png";
import React, { useState, useEffect } from "react";
import { Button, Card as Card1, Divider, Modal, Input, Radio, notification } from "antd";
import {
  DollarOutlined,
  CreditCardOutlined,
  CalendarOutlined,
  CloseCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useLocation } from "react-router-dom";
import axios from 'axios'; // Optional: if using axios
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/Picture1.png"; 

const Booking = () => {
  const { state } = useLocation();
  const { firstName, lastName, destination, stopNumber, fareAmount, travelTime, source, id } = state;
  console.log(state);
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(""); 
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    focused: ""
  });
  
  // Base fare calculation
  const baseFare = (fareAmount / 1.1).toFixed(2); 

  useEffect(() => {
    // Set Current Date
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);

    const departureTime = new Date();
    // Add travelTime minutes to the departure time
    departureTime.setMinutes(departureTime.getMinutes() + parseInt(travelTime));

    const arrivalTimeString = departureTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    setArrivalTime(arrivalTimeString);
  }, [travelTime]);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleProceedToPayment = () => {
    if (paymentMethod) {
      setIsPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      focused: name === "cvc" ? "cvc" : formData.focused,
    });
  };

  const handleInputFocus = ({ target }) => {
    setFormData({ ...formData, focused: target.name });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data to send in the POST request
    const requestData = {
      modeOfPayment: "Card",
      userFirstname: firstName,
      userLastname: lastName,
      destinationName: destination,
      trainStationId: stopNumber,
      amount: fareAmount,
      travelTime,
      source,
      train_id: id,

      cardNumber: parseInt(formData.cardNumber),
      
    };

    try {
     
      // const response = await axios.post("http://localhost:8080/api/transactions/add-transaction", requestData);
      console.log(requestData);
      // Handle success response
      // console.log("Payment successful:", response.data);

      notification.success({
        message: "Payment Success",
        description: "Your payment was successful!",
      })
      navigate("/ticket", {
        state: { requestData },
      });
    
      
      // Reset form data and close popup after submission
      setFormData({
        ...formData,
        cardNumber: "",
        expiry: "",
        cvc: "",
        focused: "",
      });
      setIsPopupVisible(false); 

    } catch (error) {
      // Handle error
      console.error("Error making payment:", error);
      notification.error({
        message: "Payment Failed",
        description: "There was an issue with your payment. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#E2CFEA]">
      {/* Header Section */}
      {/* <header className="bg-[#062726] p-4 flex justify-between items-center">
        <div className="text-[#E2CFEA] text-xl font-bold">SoT Railways Ticketing System</div>
        <div className="text-[#E2CFEA] font-semibold">ADMIN</div>
      </header> */}
          <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
                    <div className="flex items-center space-x-3">
                      <img src={logo1} alt="Logo" className="h-8" />
                      <span className="text-xl font-bold">SoT Railway Ticketing System</span>
                    </div>
                    <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded text-sm font-medium">
                      ADMIN
                    </button>
                  </nav>

      {/* Main Content */}
      <h2 className="text-3xl font-semibold text-[#6247AA] mb-4 text-center mt-16">Complete Your Booking</h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full">
        {/* Booking Section */}
        <div className="flex flex-col gap-6 w-full md:col-span-2 h-full">
          <Card1 className="shadow-lg h-full">
            <Divider />
            <div className="text-[#102B3F] flex items-center gap-2 mb-4">
              <CalendarOutlined /> {currentDate}
            </div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#6247AA] w-4 h-4 rounded-full"></div>
                  <p className="text-[#102B3F]">{source}</p>
                  <p className="text-[#102B3F]">{new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                  </p>
                </div>
                <div className="h-8 border-l-2 border-dashed border-[#102B3F] ml-2"></div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#A06CD5] w-4 h-4 rounded-full"></div>
                  <p className="text-[#102B3F]">{destination}</p>
                  <p className="text-[#102B3F]">{arrivalTime}</p>
                </div>
              </div>
              <div className="text-[#102B3F]">
                {`${Math.floor(parseInt(travelTime) / 60)} hours ${parseInt(travelTime) % 60} minutes`}
              </div>

              <div className="flex justify-center">
                <img src={logo} alt="Traveler Illustration" />
              </div>
            </div>
          </Card1>
        </div>

        {/* Fare Summary */}
        <div className="flex flex-col gap-6 w-full h-full">
          <Card1 className="shadow-lg h-full">
            <h2 className="text-lg font-semibold text-[#6247AA]">Fare Summary</h2>
            <Divider />
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-[#102B3F]">
                <DollarOutlined /> Base Fare
              </div>
              <span>¥{baseFare}</span>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-[#102B3F]">
                <DollarOutlined /> Taxes(10%)
              </div>
              <span>¥{(fareAmount - baseFare).toFixed(2)}</span>
            </div>
            <Divider className="my-1" />
            <div className="flex justify-between items-center text-lg font-semibold text-[#062726]">
              <span>Total Amount</span>
              <span>¥{fareAmount}</span>
            </div>
            <Divider />
          </Card1>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/3 p-6">
          <Radio.Group
            onChange={handlePaymentMethodChange}
            value={paymentMethod}
            className="flex gap-3 justify-center items-center"
          >
            <Radio value="card" className="flex items-center text-lg font-medium">
              <CreditCardOutlined className="mr-3 text-[#102B3F]" /> Card
            </Radio>
          </Radio.Group>
          <Button
            type="primary"
            className="w-full bg-[#6247AA] hover:bg-[#A06CD5] border-none mt-6 py-3 rounded-md shadow-md text-white text-lg font-medium"
            disabled={!paymentMethod}
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>

      {/* Payment Modal */}
      <Modal
        visible={isPopupVisible}
        title="Card Payment"
        onCancel={closePopup}
        footer={null}
        className="payment-modal"
      >
        <p>Amount to be paid: ¥{fareAmount}</p>

        {/* Credit Card Form */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="p-8 bg-gray-100 flex flex-col w-full xl:w-4/5 rounded-lg shadow-md">
              {/* Credit Card Preview */}
              <div className="mt-4 flex justify-center">
                <Card
                  number={formData.cardNumber}
                  name={firstName + " " + lastName}
                  expiry={formData.expiry}
                  cvc={formData.cvc}
                  focused={formData.focused}
                />
              </div>

              {/* Card Number Input */}
              <div className="mt-6">
                <Input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="number"
                  name="cardNumber"
                  placeholder="0000 1234 6549 15151"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Full Name Input */}
              <div className="mt-4">
                <Input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={firstName + " " + lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Expiry & CVC Inputs */}
              <div className="mt-4 flex space-x-4">
                <Input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="cvc"
                  placeholder="CVC"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-2 mt-8">
                <Button onClick={closePopup} icon={<CloseCircleOutlined />} className="border-none">
                  Cancel
                </Button>
                <Button type="primary" icon={<CheckOutlined />} htmlType="submit" className="bg-[#062726]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Booking;



// import logo from "../../assets/account-benefits 1.png";
// import React, { useState, useEffect } from "react";
// import Card1 from "./Payment1";
// import { Button, Card, Divider, Modal, Input, Radio } from "antd";
// import {
//   DollarOutlined,
//   CreditCardOutlined,
//   CalendarOutlined,
//   CloseCircleOutlined,
//   CheckOutlined,
// } from "@ant-design/icons";

// const Booking = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
//   const [currentDate, setCurrentDate] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState(null);
//   const [arrivalTime, setArrivalTime] = useState(""); // State for arrival time

//   const staticData = {
//     totalFare: 550,
//     source: "Tokyo Station",
//     destination: "Yokohama Station",
//     travelTime: "65", // Travel time in minutes 
//   };

//   const baseFare = (staticData.totalFare / 1.1).toFixed(2); // Deducting 10% tax

//   useEffect(() => {
//     // Set Current Date
//     const now = new Date();
//     const formattedDate = now.toLocaleDateString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//     setCurrentDate(formattedDate);

//     // Calculate Arrival Time
//     const departureTime = new Date();

//     // Add 65 minutes to the departure time
//     departureTime.setMinutes(departureTime.getMinutes() + parseInt(staticData.travelTime));

//     // Set the final arrival time as a string
//     const arrivalTimeString = departureTime.toLocaleTimeString([], {
//       hour: '2-digit',
//       minute: '2-digit',
//     });
//     setArrivalTime(arrivalTimeString);
//   }, []);

//   const handlePaymentMethodChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleProceedToPayment = () => {
//     if (paymentMethod) {
//       setIsPopupVisible(true);
//     }
//   };

//   const closePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#E2CFEA]">
//       {/* Header Section */}
//       <header className="bg-[#062726] p-4 flex justify-between items-center">
//         <div className="text-[#E2CFEA] text-xl font-bold">SoT Railways Ticketing System</div>
//         <div className="text-[#E2CFEA] font-semibold">ADMIN</div>
//       </header>
// <Card1/>
//       {/* Main Content */}
//       <h2 className="text-3xl font-semibold text-[#6247AA] mt-6 mb-4 text-center">Complete Your Booking</h2>
//       <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full">
//         {/* Booking Section */}
//         <div className="flex flex-col gap-6 w-full md:col-span-2 h-full">
//           <Card className="shadow-lg h-full">
//             <Divider />
//             <div className="text-[#102B3F] flex items-center gap-2 mb-4">
//               <CalendarOutlined /> {currentDate}
//             </div>
//             <div className="flex items-center justify-between mb-6">
//               <div>
//                 <div className="flex items-center gap-2">
//                   <div className="bg-[#6247AA] w-4 h-4 rounded-full"></div>
//                   <p className="text-[#102B3F]">{staticData.source}</p>
//                   <p className="text-[#102B3F]">{new Date().toLocaleTimeString([], {
//                     hour: '2-digit',
//                     minute: '2-digit',
//                     })}
//                   </p>
//                 </div>
//                 <div className="h-8 border-l-2 border-dashed border-[#102B3F] ml-2"></div>
//                 <div className="flex items-center gap-2">
//                   <div className="bg-[#A06CD5] w-4 h-4 rounded-full"></div>
//                   <p className="text-[#102B3F]">{staticData.destination}</p>
//                   <p className="text-[#102B3F]">{arrivalTime}</p>
//                 </div>
//               </div>
//               <div className="text-[#102B3F]">
//   {`${Math.floor(parseInt(staticData.travelTime) / 60)} hours ${parseInt(staticData.travelTime) % 60} minutes`}
// </div>

//               <div className="flex justify-center">
//                 <img src={logo} alt="Traveler Illustration" />
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Fare Summary */}
//         <div className="flex flex-col gap-6 w-full h-full">
//           <Card className="shadow-lg h-full">
//             <h2 className="text-lg font-semibold text-[#6247AA]">Fare Summary</h2>
//             <Divider />
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center gap-2 text-[#102B3F]">
//                 <DollarOutlined /> Base Fare
//               </div>
//               <span>¥{baseFare}</span>
//             </div>
//             <Divider className="my-1" />
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center gap-2 text-[#102B3F]">
//                 <DollarOutlined /> Taxes(10%)
//               </div>
//               <span>¥{(staticData.totalFare - baseFare).toFixed(2)}</span>
//             </div>
//             <Divider className="my-1" />
//             <div className="flex justify-between items-center text-lg font-semibold text-[#062726]">
//               <span>Total Amount</span>
//               <span>¥{staticData.totalFare}</span>
//             </div>
//             <Divider />
//           </Card>
//         </div>
//       </div>

//       {/* Payment Method Section */}
//       <div className="flex justify-center w-full">
//         <div className="flex flex-col gap-4 w-full md:w-1/3 p-6">
//           <Radio.Group
//             onChange={handlePaymentMethodChange}
//             value={paymentMethod}
//             className="flex gap-3 justify-center items-center"
//           >
//             {/* <Radio value="cash" className="flex items-center text-lg font-medium">
//               <DollarOutlined className="mr-3 text-[#102B3F]" /> Cash
//             </Radio> */}
//             <Radio value="card" className="flex items-center text-lg font-medium">
//               <CreditCardOutlined className="mr-3 text-[#102B3F]" /> Card
//             </Radio>
//           </Radio.Group>
//           <Button
//             type="primary"
//             className="w-full bg-[#6247AA] hover:bg-[#A06CD5] border-none mt-6 py-3 rounded-md shadow-md text-white text-lg font-medium"
//             disabled={!paymentMethod}
//             onClick={handleProceedToPayment}
//           >
//             Proceed to Payment
//           </Button>
//         </div>
//       </div>

//       {/* Payment Modal */}
//       <Modal
//         visible={isPopupVisible}
//         title={paymentMethod == "Card Payment"}
//         onCancel={closePopup}
//         footer={null}
//         className="payment-modal"
//       >
//         <p>Amount to be paid: ¥{staticData.totalFare}</p>
       
//           <Input placeholder="Enter Card Details" className="mb-4" />
        
//         <div className="flex justify-end gap-2">
//           <Button onClick={closePopup} icon={<CloseCircleOutlined />} className="border-none">
//             Cancel
//           </Button>
//           <Button type="primary" icon={<CheckOutlined />} className="bg-[#062726]">
//             Submit
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Booking;
