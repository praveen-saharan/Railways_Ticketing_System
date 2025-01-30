import React, { useState } from 'react';
import { Layout, Input, Button, Table, Pagination } from 'antd';
import logo1 from "../../assets/Picture1.png"; 
import { Link } from 'react-router-dom';
import Navbar from "../../Components/Navbar";

const { Content, Sider, Footer } = Layout;

const FinancialReports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ stationName: '' });
  const [selectedKey, setSelectedKey] = useState('');

  // Dummy data for financial reports
  const data = Array.from({ length: 50 }, (_, index) => ({
    key: index + 1,
    stationName: `Station ${index + 1}`,
    earnings: Math.floor(Math.random() * 1000000),
    totalPassengers: Math.floor(Math.random() * 2000),
  }));

  // Pagination logic
  const pageSize = 10;
  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Columns for the financial report table
  const columns = [
    {
      title: 'Station Name',
      dataIndex: 'stationName',
      key: 'stationName',
    },
    {
      title: 'Earnings in Yen (¥)',
      dataIndex: 'earnings',
      key: 'earnings',
      render: (text) => new Intl.NumberFormat('ja-JP').format(text),
    },
    {
      title: 'Total Passengers',
      dataIndex: 'totalPassengers',
      key: 'totalPassengers',
      render: (text) => new Intl.NumberFormat().format(text),
    },
  ];

  // Filter reports based on filter state (search by stationName)
  const filteredData = paginatedData.filter((report) =>
    report.stationName.toLowerCase().includes(filters.stationName.toLowerCase())
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#F2E6FF' }}>
      <Navbar />

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
                value={filters.stationName}
                onChange={(e) => setFilters({ ...filters, stationName: e.target.value })}
                placeholder="Search by Station Name"
                className="w-64 border-gray-300 rounded-md shadow-sm"
              />
              <Button type="primary" className="bg-purple-700 hover:bg-purple-800">
                Apply Filter
              </Button>
            </div>
          </div>

          {/* Table Section */}
          <div className="overflow-auto bg-white shadow-md rounded-lg">
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={false} // Disable built-in pagination
              rowKey="key"
              className="table-fixed"
              style={{ minWidth: '800px' }}
            />
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={data.length}
              pageSize={pageSize} // Show 10 reports per page
              onChange={handlePageChange}
              className="custom-pagination"
            />
          </div>
        </Content>

        {/* Footer
        <Footer className="text-center bg-purple-900 text-white py-4 w-full">
          © 2025 SoT Railway Ticketing System. All Rights Reserved.
        </Footer> */}
      </Layout>
      
      {/* Footer */}
      <Footer className="text-center text-white bg-purple-900 py-4 shadow-md fixed bottom-0 w-full">
        <p>© 2025 SoT Railway Ticketing System. All Rights Reserved.</p>
      </Footer>

    </Layout>
  );
};

export default FinancialReports;
