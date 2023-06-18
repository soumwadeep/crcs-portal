import React, { useEffect, useState } from 'react';
import appwrite from '../appwrite';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const collectionId = 'your-collection-id'; // Replace with your collection ID

    try {
      const response = await appwrite.database.listDocuments(collectionId);
      setData(response.documents);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>CRCS Portal Dashboard</h1>
      {/* Render the data in the dashboard */}
    </div>
  );
};

export default Dashboard;
