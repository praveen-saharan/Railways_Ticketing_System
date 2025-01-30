import { useState } from "react";
import { Card, CardContent } from "../../Components/ui/Card";
import { Button } from "../../Components/ui/Button";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Admin = () => {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-purple-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full">
              {/* User Icon */}
              <svg
                className="w-10 h-10 text-purple-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 14a4 4 0 00-8 0m8 0a4 4 0 00-8 0m8 0v1a4 4 0 01-8 0v-1m8 0a4 4 0 00-8 0"></path>
                <circle cx="12" cy="8" r="4"></circle>
              </svg>
            </div>
            <h1 className="text-2xl font-bold mt-4">Welcome, Admin</h1>
            <p className="text-gray-600 mt-1">What would you like to do today?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardContent>
              {/* Upload Icon */}
              <svg
                className="w-12 h-12 text-purple-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a4 4 0 004 4h8a4 4 0 004-4v-1m-4-6l-4-4m0 0l-4 4m4-4v12"></path>
              </svg>
              <h2 className="text-lg font-semibold mt-4">Upload new CSV file</h2>
              <Button onClick={() => setUploadModalOpen(true)}>Upload</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              {/* Passenger Data Icon */}
              <svg
                className="w-12 h-12 text-purple-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 14a4 4 0 00-8 0v1a4 4 0 008 0v-1z"></path>
              </svg>
              <h2 className="text-lg font-semibold mt-4">Passenger Data</h2>
              <Button>View Data</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              {/* Financial Reports Icon */}
              <svg
                className="w-12 h-12 text-purple-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2V7m0 9h2a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2h6"></path>
              </svg>
              <h2 className="text-lg font-semibold mt-4">Financial Reports</h2>
              <Button>View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-purple-800 p-6 rounded-2xl shadow-lg text-white w-96 text-center relative">
            {/* Cancel Button */}
            <button
              className="absolute top-4 right-4 text-sm underline"
              onClick={() => setUploadModalOpen(false)}
            >
              Cancel
            </button>

            {/* Upload Icon */}
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a4 4 0 004 4h8a4 4 0 004-4v-1m-4-6l-4-4m0 0l-4 4m4-4v12"></path>
            </svg>

            {/* Upload Input */}
            <p className="mt-4 text-gray-200">Drag or Upload file from device</p>
            <input type="file" className="mt-4 p-2 bg-white text-black rounded-md w-full" />

            {/* Upload Button */}
            <button className="mt-4 bg-purple-500 px-6 py-2 rounded-full text-white font-bold">
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
