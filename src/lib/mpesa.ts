import axios from 'axios';

const {
  MPESA_SHORTCODE,
  MPESA_PASSKEY,
  MPESA_CONSUMER_KEY,
  MPESA_CONSUMER_SECRET,
  MPESA_CALLBACK_URL,
} = process.env;

function base64Encode(input: string): string {
  return Buffer.from(input).toString('base64');
}

function getTimestamp(): string {
  return new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
}

function formatPhoneNumber(phone: string): string {
  if (phone.startsWith('07')) {
    return '254' + phone.slice(1);
  }
  return phone;
}

export async function initiateStkPush({
  amount,
  phoneNumber,
  accountReference,
}: {
  amount: number;
  phoneNumber: string;
  accountReference: string;
}) {
  if (
    !MPESA_SHORTCODE ||
    !MPESA_PASSKEY ||
    !MPESA_CONSUMER_KEY ||
    !MPESA_CONSUMER_SECRET ||
    !MPESA_CALLBACK_URL
  ) {
    throw new Error('Missing MPESA configuration in environment variables');
  }

  const timestamp = getTimestamp();
  const password = base64Encode(MPESA_SHORTCODE + MPESA_PASSKEY + timestamp);
  const auth = base64Encode(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`);

  const tokenResponse = await axios.get(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  const accessToken = tokenResponse.data.access_token;
  const formattedPhone = formatPhoneNumber(phoneNumber);

  const stkResponse = await axios.post(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      BusinessShortCode: MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: MPESA_SHORTCODE,
      PhoneNumber: formattedPhone,
      CallBackURL: MPESA_CALLBACK_URL,
      AccountReference: accountReference,
      TransactionDesc: 'Payment for service listing',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return stkResponse.data; // Optionally return CheckoutRequestID, etc.
}
