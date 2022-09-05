import { Card } from '@mui/material';
import RecentOrdersTable from './RecentOrdersTable';


function RecentOrders() {
  const cryptoOrders = [
    {
      id: '1',
      orderDetails: '10 - 50 Matic',
      status: 1,
      orderID: '7 - 35 Matic',
      sourceName: '2 - 10 Matic',
      sourceDesc: '1 - 5 Matic',
      amountCrypto: 1,
      amount: 0,
      cryptoCurrency: 'MATIC',
      currency: '$'
    },
    {
      id: '2',
      orderDetails: '51 - 100 Matic',
      status: 2,
      orderID: '35 - 70 Matic',
      sourceName: '10 - 20 Matic',
      sourceDesc: '5 - 10 Matic',
      amountCrypto: 1,
      amount: 0,
      cryptoCurrency: 'MATIC',
      currency: '$'
    },
    {
      id: '3',
      orderDetails: '101 - 200 Matic',
      status: 3,
      orderID: '70 - 140 Matic',
      sourceName: '20 - 40 Matic',
      sourceDesc: '10 - 20 Matic',
      amountCrypto: 1,
      amount: 0,
      cryptoCurrency: 'MATIC',
      currency: '$'
    },
    {
      id: '4',
      orderDetails: '201 - 400 Matic',
      status: 4,
      orderID: '140 - 280 Matic',
      sourceName: '40 - 80 Matic',
      sourceDesc: '20 - 40 Matic',
      amountCrypto: 1,
      amount: 0,
      cryptoCurrency: 'MATIC',
      currency: '$'
    },
    {
      id: '5',
      orderDetails: '401 Matic Onwards',
      status: 5,
      orderID: '> 280 Matic',
      sourceName: '> 80 Matic',
      sourceDesc: '> 40 Matic',
      amountCrypto: 1,
      amount: 0,
      cryptoCurrency: 'MATIC',
      currency: '$'
    },
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;