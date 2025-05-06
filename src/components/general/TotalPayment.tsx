import React, { useEffect, useState } from 'react';

interface PaymentCardProps {
  totalAmount: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ totalAmount }) => {
  return (
    <div >
      <p className='text-gray-800 text-xs'>Kenya Shillings</p>
      <h1 className='font-ligh text-4xl text-gray-800 mt-4'>{`${totalAmount}.00`}</h1>
    </div>
  );
};

const TotalPayment: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/payment'); // Replace with your endpoint
        const data = await response.json();
        setTotalAmount(data.totalAmount); // Assuming the totalAmount is in the response body
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {totalAmount !== null ? (
        <PaymentCard totalAmount={totalAmount} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TotalPayment;
