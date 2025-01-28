import React from 'react';
import tick from '../../../assets/tick.png';
import './ticket.css';

const TicketCash = () => {
  // Static booking data
  const bookingData = {
    name: "Nidhi",
    destination: "Kawasaki",
    fareAmount: "220",
    change: "80"
  };

  return (
    <div className="max-w-4xl mx-auto mt-40 bg p-6 rounded-lg shadow-md">
      <div className='image'><img src={tick}></img></div>
      <h2 className="text-2xl font-bold text-highlight">Hurray! Your Ticket has been confirmed</h2>
      <div className="space-y-6 justify-items-center">
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Destination:</strong> {bookingData.destination}</p>
        <p><strong>Fare Amount:</strong> ₹{bookingData.fareAmount}</p>
        <p><strong>Change Amount:</strong> {bookingData.change}</p>
      </div>
      <h2 className="text-2xl font-bold text-highlight mb-2 pt-6">You may now proceed to Platform 2 </h2>
      <h2 className="text-2xl font-bold text-highlight mb-2 pt-3">Thanks for choosing SoT railways. Happy Journey! </h2>
    </div>
  );
};

export default TicketCash;
