import React from 'react';

const BookingSummary = () => {
  // Static booking data
  const bookingData = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    seatPreference: "Window",
    contact: "1234567890",
    train: {
      name: "Express Train",
      fare: 500,
    },
  };

  const handleConfirm = () => {
    // Navigate to payment page (commented out for now)
    // history.push('/payment');
    console.log('Proceeding to payment...');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-highlight mb-4">Booking Summary</h2>
      <div>
        <p><strong>Name:</strong> {bookingData.name}</p>
        <p><strong>Age:</strong> {bookingData.age}</p>
        <p><strong>Gender:</strong> {bookingData.gender}</p>
        <p><strong>Seat Preference:</strong> {bookingData.seatPreference}</p>
        <p><strong>Contact Number:</strong> {bookingData.contact}</p>
        <p><strong>Train:</strong> {bookingData.train.name}</p>
        <p><strong>Fare:</strong> ₹{bookingData.train.fare}</p>
      </div>
      <button
        onClick={handleConfirm}
        className="w-full p-3 bg-accent text-light rounded-md hover:bg-highlight transition duration-300"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default BookingSummary;
