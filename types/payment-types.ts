export interface PaymentData {
    totalAmount: number;
    payments: Payment[];
  }
  
  export interface Payment {
    id: string;
    amount: number;
    status: 'successful' | 'pending' | 'failed';
    method: string;
    receipt: string | null;
    transactionId: string | null;
    phoneNumber: string | null;
    listingId: string;
    receiptUrl: string | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
    listing: Listing;
    user: User;
  }
  
  export interface Listing {
    id: string;
    title: string;
    description: string;
    budget: number;
    userId: string;
    location: string;
    estateName: string;
    apartmentNumber: string;
    status: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: string | null;
    image: string;
    phone: string | null;
    role: string;
    userType: string;
    onboardingCompleted: boolean;
    lastLogin: string;
    createdAt: string;
    updatedAt: string;
  }
  