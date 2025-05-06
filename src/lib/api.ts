import axios from 'axios';
import { PaymentData } from '../../types/payment-types';

export const fetchPayments = async (): Promise<PaymentData> => {
  const response = await axios.get<PaymentData>('/api/payments'); // Adjust endpoint accordingly
  return response.data;
};