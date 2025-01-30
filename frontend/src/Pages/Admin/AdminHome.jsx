// import React, { useState } from 'react';
// import { FaFileUpload, FaUsers, FaFileInvoice } from 'react-icons/fa'; // Import icons
// import { Layout, Button, Modal, Upload, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import logo1 from "../../assets/Picture1.png"; 
// import { Link } from 'react-router-dom';

// const { Header, Content, Sider } = Layout;

// const AdminHome = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [fileList, setFileList] = useState([]);

 
//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   // Handle the modal close
//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   // Handle the file upload change
//   const handleChange = (info) => {
//     setFileList(info.fileList);
//   };

//   // Handle the file upload and make the POST request
//   const handleUpload = async () => {
//     if (fileList.length === 0) {
//       message.error('Please select a CSV file to upload.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', fileList[0].originFileObj); // Append the file

//     try {
//       const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         message.success('File uploaded successfully!');
//         setIsModalVisible(false); // Close the modal on success
//       }
//     } catch (error) {
//       message.error('File upload failed. Please try again.');
//     }
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }} className="bg-gray-100">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
//         <div className="flex items-center space-x-3">
//           <img src={logo1} alt="Logo" className="h-8" />
//           <span className="text-xl font-semibold">SoT Railway Ticketing System</span>
//         </div>
//         <Link to="/" className="hover:bg-purple-300  rounded-lg px-4 py-2 text-sm font-medium">
//           Logout
//         </Link>
//       </nav>

//       {/* Main Content Area */}
//       <Content className="pt-24 px-8 bg-gray-100">
//         <div className="text-center py-8">
//           <h2 className="text-3xl font-semibold text-gray-800">Welcome, Admin!</h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//   {/* Upload CSV Button */}
//   <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
//   <FaFileUpload className="text-5xl mb-4 text-purple-600" />
//     <button
//       onClick={showModal}
//       size="large"
//        className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
//     >
//       Upload New CSV File
//     </button>
   
//   </div>

//   {/* Passenger Data Button */}
//   <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
   
//     <FaUsers className="text-5xl mb-4 text-purple-600" />
//     <Link to="/admin/passenger-list"
    
//       size="large"
//        className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
//     >
//       Passenger Data
//     </Link>

//   </div>

//   {/* Financial Reports Button */}
//   <div className="bg-white p-8 rounded-lg shadow-xl text-center hover:bg-purple-100 transition-colors">
    
//     <FaFileInvoice className="text-5xl mb-4 text-purple-600" />
//     <Link to="/admin/financial-reports"
      
//       size="large"
//        className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg"
//     >
//       Financial Reports
//     </Link>
//   </div>
// </div>

//       </Content>

//       {/* Modal for CSV Upload */}
//       <Modal
//         title="Upload CSV File"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" onClick={handleCancel} className="bg-gray-500 hover:bg-gray-600 text-white">
//             Cancel
//           </Button>,
//           <Button key="submit" type="primary" onClick={handleUpload} className="bg-purple-700 hover:bg-purple-800">
//             Upload
//           </Button>,
//         ]}
//       >
//         <Upload
//           accept=".csv"
//           fileList={fileList}
//           onChange={handleChange}
//           beforeUpload={() => false} // Disable automatic upload, we'll handle it manually
//         >
//           <Button icon={<UploadOutlined />} className="bg-purple-700 text-white hover:bg-purple-800">
//             Select CSV File
//           </Button>
//         </Upload>
//       </Modal>
//     </Layout>
//   );
// };

// export default AdminHome;


import { useState } from "react";
import { Card, CardContent } from "../../Components/ui/Cards";
import { Button } from "../../Components/ui/Button";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from 'react-router-dom';

const AdminHome = () => {
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
              
              <Link to="/admin/passenger-list" size="large" className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg">
                View Data
              </Link>
              
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
              <Link to="/admin/financial-reports" size="large" className="text-xl font-medium text-gray-800 border-2 border-purple-200 p-2 rounded-lg">
                View Report
              </Link>
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
 
export default AdminHome;



