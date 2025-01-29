import React from 'react';
import tick from '../../../assets/tick.png';

const TicketCard = () => {
  // Static booking data
  const bookingData = {
    name: "Nidhi",
    destination: "Kawasaki",
    fareAmount: "220",
    card: "XXXX-XXXX-3085"
  };

  return (
    <div className="max-w-4xl mx-auto mt-40 bg p-6 rounded-lg shadow-xl">
      <div className='image'><img src={tick}></img></div>
      <h2 className="text-2xl text-highlight pt-4">Hurray! Your Ticket has been confirmed</h2>
      <div className="space-y-6 justify-items-center pt-5">
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Destination:</strong> {bookingData.destination}</p>
        <p><strong>Fare Amount:</strong> ₹{bookingData.fareAmount}</p>
        <p><strong>Card Number:</strong> {bookingData.card}</p>
      </div>
      <h3 className="mb-2 pt-5">You may now proceed to Platform 2 </h3>
      <h3 className=" mb-2 pt-2">Thanks for choosing SoT railways. Happy Journey! </h3>
    </div>
  );
};

export default TicketCard;
