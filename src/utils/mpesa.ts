// utils/mpesa.ts

import axios from 'axios';
import { format } from 'date-fns';

export async function initiateStkPush({
  phoneNumber,
  amount,
  accountReference,
  transactionDesc,
}: {
  phoneNumber: string;
  amount: number;
  accountReference: string;
  transactionDesc: string;
}) {
  const consumerKey = process.env.MPESA_CONSUMER_KEY!;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET!;
  const shortcode = process.env.MPESA_SHORTCODE!;
  const passkey = process.env.MPESA_PASSKEY!;
  const callbackUrl = process.env.MPESA_CALLBACK_URL!;

  // 1. Get access token
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  const tokenRes = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: { Authorization: `Basic ${auth}` },
  });
  const accessToken = tokenRes.data.access_token;

  // 2. Create STK Push request
  const timestamp = format(new Date(), 'yyyyMMddHHmmss');
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

  const res = await axios.post(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: shortcode,
      PhoneNumber: phoneNumber,
      CallBackURL: callbackUrl,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return res.data; // Contains CheckoutRequestID, MerchantRequestID, etc.
}
