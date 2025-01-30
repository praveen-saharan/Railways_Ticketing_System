import React, { useState } from 'react';
import { Layout, Input, Button, Table, Pagination, Modal } from 'antd';
import { Link } from 'react-router-dom';
import logo1 from "../../assets/Picture1.png"; 

const { Content, Sider, Footer } = Layout;


const PassengerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', trainStation: '' });
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');

  // Dummy data for passengers
  const data = [
    { key: '1', passengerId: 'P12345', passengerName: 'John Doe', paymentMethod: 'Credit Card', destination: 'Tokyo', stopNumber: 5, fareAmount: 1200, paymentTime: '2025-01-01 12:30:00', trainStation: 'Shibuya' },
    { key: '2', passengerId: 'P12346', passengerName: 'Jane Smith', paymentMethod: 'Cash', destination: 'Osaka', stopNumber: 3, fareAmount: 800, paymentTime: '2025-01-02 14:15:00', trainStation: 'Shinjuku' },
    { key: '3', passengerId: 'P12347', passengerName: 'Michael Brown', paymentMethod: 'Debit Card', destination: 'Kyoto', stopNumber: 2, fareAmount: 1000, paymentTime: '2025-01-03 10:00:00', trainStation: 'Shibuya' },
    { key: '4', passengerId: 'P12348', passengerName: 'Emily Davis', paymentMethod: 'PayPal', destination: 'Hiroshima', stopNumber: 4, fareAmount: 1100, paymentTime: '2025-01-04 09:45:00', trainStation: 'Shinjuku' },
    { key: '5', passengerId: 'P12349', passengerName: 'David Wilson', paymentMethod: 'Credit Card', destination: 'Fukuoka', stopNumber: 6, fareAmount: 1300, paymentTime: '2025-01-05 16:20:00', trainStation: 'Shibuya' },
  ];

  // Columns for the table
  const columns = [
    { title: 'Passenger Id', dataIndex: 'passengerId', key: 'passengerId' },
    { title: 'Passenger Name', dataIndex: 'passengerName', key: 'passengerName' },
    { title: 'Payment Method', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { title: 'Destination', dataIndex: 'destination', key: 'destination' },
    { title: 'Stop Number', dataIndex: 'stopNumber', key: 'stopNumber' },
    { title: 'Fare Amount', dataIndex: 'fareAmount', key: 'fareAmount' },
    { title: 'Payment Time', dataIndex: 'paymentTime', key: 'paymentTime' },
  ];

  // Filter passengers based on name, station, and destination
  const filteredData = data.filter(passenger => 
    (passenger.passengerName.toLowerCase().includes(filters.name.toLowerCase())) &&
    (passenger.trainStation.toLowerCase().includes(filters.trainStation.toLowerCase()))
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Show passenger details in modal
  const showPassengerDetails = (passenger) => {
    setSelectedPassenger(passenger);
    setIsModalVisible(true);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }} className="bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-purple-900 text-white flex justify-between items-center px-8 py-4 shadow-md z-10">
        <div className="flex items-center space-x-4">
          <img src={logo1} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">SoT Railway Ticketing System</span>
        </div>
        <Link to="/" className="hover:bg-purple-700 rounded-lg px-4 py-2 text-sm font-medium">
          Logout
        </Link>
      </nav>

       {/* Sidebar */}
            <Sider width={250} className="bg-white fixed h-full shadow-lg mt-16">
              <nav>
                <ul className="space-y-6 px-4 py-8">
                  <li>
                    <Link 
                      to="/admin" 
                      className={`text-lg transition-colors px-4 py-2 block ${selectedKey === '/admin' ? 'bg-purple-900 text-white' : 'hover:bg-purple-200'}`} 
                      onClick={() => setSelectedKey('/admin')}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/admin/passenger-list" 
                      className={`text-lg transition-colors px-4 py-2 block ${selectedKey === '/admin/passenger-list' ? 'bg-purple-900 text-white' : 'hover:bg-purple-200'}`} 
                      onClick={() => setSelectedKey('/admin/passenger-list')}>
                      Passenger Data
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/admin/financial-reports" 
                      className={`text-lg transition-colors px-4 py-2 block ${selectedKey === '/admin/financial-reports' ? 'bg-purple-900 text-white' : 'hover:bg-purple-200'}`} 
                      onClick={() => setSelectedKey('/admin/financial-reports')}>
                      Financial Report
                    </Link>
                  </li>
                </ul>
              </nav>
            </Sider>

      {/* Main Content */}
      <Layout className="site-layout" style={{ marginLeft: 250 }}>
        <Content className="pt-24 px-8 pb-20"> {/* Added padding-bottom to prevent content from hiding behind footer */}
          {/* Filter Section */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">Financial Reports</h2>
            <div className="flex items-center space-x-4">
              <Input
                value={filters.name}
                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                placeholder="Search by Passenger Name"
                className="w-64"
              />
              <Input
                value={filters.trainStation}
                onChange={(e) => setFilters({ ...filters, trainStation: e.target.value })}
                placeholder="Filter by Train Station"
                className="w-64"
              />
              <Button type="primary" className="bg-purple-700 hover:bg-purple-800">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Table Section */}
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={false} // Disable built-in pagination
            rowKey="key"
            onRow={(record) => ({
              onClick: () => showPassengerDetails(record),
            })}
          />

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={5}
              onChange={handlePageChange}
            />
          </div>
        </Content>
      </Layout>

      {/* Modal for Passenger Details */}
      <Modal
        title="Passenger Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedPassenger && (
          <div className="space-y-4">
            <p><strong>Passenger ID:</strong> {selectedPassenger.passengerId}</p>
            <p><strong>Name:</strong> {selectedPassenger.passengerName}</p>
            <p><strong>Payment Method:</strong> {selectedPassenger.paymentMethod}</p>
            <p><strong>Destination:</strong> {selectedPassenger.destination}</p>
            <p><strong>Stop Number:</strong> {selectedPassenger.stopNumber}</p>
            <p><strong>Fare Amount:</strong> ¥{selectedPassenger.fareAmount}</p>
            <p><strong>Payment Time:</strong> {selectedPassenger.paymentTime}</p>
            <p><strong>Train Station:</strong> {selectedPassenger.trainStation}</p>
          </div>
        )}
      </Modal>

      {/* Footer */}
      <Footer className="text-center text-white bg-purple-900 py-4 shadow-md fixed bottom-0 w-full">
        <p>© 2025 SoT Railway Ticketing System. All Rights Reserved.</p>
      </Footer>

    </Layout>
  );
};

export default PassengerList;


