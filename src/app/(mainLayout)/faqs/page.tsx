import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'

const Faqsmain = [
  {
    maintitle: 'General',
    faqs: [
      {
        title: 'What is the Mr. KIM Mobile App?',
        description: 'Mr. KIM Mobile App is a mobile application designed to connect service seekers with skilled professional service providers ( such as plumbers, mechanic, electrician, housekeeper and many more) for a wide range of home repair and maintenance, services. It offers convenience and functionality at your fingertips.',
      },
      {
        title: 'How does the Mr. KIM Mobile App work?',
        description: 'The Mr. KIM Mobile App allows users to request professional services by submitting a service request through the app. Local professional service providers will respond to the request, and users can choose the one that best fits their needs.'
      },
      {
        title: 'Is the Mr. KIM Mobile App available in my area?',
        description: 'Mr. KIM Mobile App currently operates in all the 47 counties in Kenya. It also operates major cities in Uganda, Tanzania, and Rwanda. We are continuously expanding to serve more areas.'
      },
      {
        title: 'Is there a cost to use the Mr. KIM Mobile App?',
        description: 'Downloading and using the app is free. However, the cost of services provided by Mr.KIM varies based on the type of job and its complexity.'
      },
    ]
  },
  {
    maintitle: 'Booking and Service Questions:',
    faqs: [
      {
        title: 'How do I book a Mobile service through the Mr. KIM Mobile App?',
        description: 'To book a service, open the app, select the type of service you need, provide job details,and choose a convenient appointment time. Professional service providers in your area will respond to your request.',
      },
    ]
  },
  {
    maintitle: 'Payments and Billing:',
    faqs: [
      {
        title: 'What payment methods are accepted for services?',
        description: 'Payment is typically processed through the app using secure methods such as credit cards, M-Pesa, PayPal mobile wallet and many more. You can add your payment details to your account for cashless transactions.'
      },
      {
        title: 'Are there any additional fees or charges for using certain features or services?',
        description: 'Some features or services within the app may have associated fees such as premium service. The app will notify you of any charges before you confirm your request.'
      },
      {
        title: 'Can I schedule a service for a specific date and time?',
        description: 'Yes, you can select a date and time that works best for you when booking a service through the app.'
      },
      {
        title: 'What types of services can I request through the Mr. KIM Mobile App?',
        description: 'You can request a wide range of services, including plumbing, electrical work, mechanic,vehicle cleaning, carpentry, painting, appliance repair, and more. The available services may vary depending on your location and the professional service providers in your area.'
      },
    ]
  },
  {
    maintitle: 'Mobile Selection and Ratings:',
    faqs: [
      {
        title: 'How are professional service providers vetted and selected for the Mr. KIM Mobile App?',
        description: 'Professional service providers on our platform undergo a thorough vetting process,including background checks, qualifications verification, and an assessment of their work history.'
      },
      {
        title: 'Can I read reviews and ratings for Mr.KIM Mobile App?',
        description: 'Yes, you can view reviews and ratings left by previous customers to help you choose the right Mobile for your needs.'
      },
    ]
  },
  {
    maintitle: 'Safety and Security:',
    faqs: [
      {
        title: 'Is it safe to use the Mr. KIM Mobile App?',
        description: 'Safety is our top priority. Our professional service providers are screened, and we have safety measures in place to protect both users and our service providers.'
      },
      {
        title: 'What should I do in case of an emergency during a service?',
        description: 'In case of an emergency, please call local emergency services immediately. After ensuring safety, you can contact our customer support for assistance with the ongoing service.'
      },
    ]
  },
  {
    maintitle: 'Account and Technical Support:',
    faqs: [
      {
        title: 'How do I create an account on the Mr. KIM Mobile App?',
        description: 'Download the app ( which is available both for Android and iOS devices), sign up with your email, phone number or social media accounts, and follow the on-screen instructions to create your profile.'
      },
      {
        title: 'What should I do if I encounter technical issues with the app?',
        description: 'If you experience technical issues, you can contact our customer support team via email address customerservice@mrkim.com for assistance. We are here to help resolve any problems you may encounter.'
      },
    ]
  },
  {
    maintitle: 'Account Management:',
    faqs: [
      {
        title: 'How can I update my account information, such as my email address or phone number?',
        description: 'You can typically update your account information within the app by going to your profile settings. Follow the instructions to make the necessary changes.'
      },
      {
        title: 'I forgot my password. How can I reset it?',
        description: 'If you forget your password, there should be a Forgot Password or Reset Password option on the login screen. Follow the prompts to reset your password.'
      },
    ]
  },
  {
    maintitle: 'Can I cancel a service request?',
    faqs: [
      {
        title: 'Can I cancel a service request?',
        description: 'Yes, you can cancel a service request, but please review our cancellation policy for any applicable charges.'
      },
      {
        title: "What to do if I'm not satisfied with the service?",
        description: 'We strive for customer satisfaction. If you are not satisfied with a service, please contact our support team via email address customerservice@mrkim.app ,and we will work to resolve the issue.'
      },
    ]
  },
]


export default function page() {
  return (
    <>
      <div>
        <Image src={'/images/finance.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} quality={100} className='w-full rounded-lg mt-4' />
        <div className='py-10'>
          <h1 className='text-primary font-bold text-3xl'>Frequently Asked Questions</h1>
          <Accordion type="multiple">
            {Faqsmain.map((entry, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <h2 className='font-bold text-xl mt-4'>{entry.maintitle}</h2>
                <Accordion type="multiple">
                {entry.faqs.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${faqIndex}`}>
                    <AccordionTrigger className='font-bold cursor-pointer text-primary'>{faq.title}</AccordionTrigger>
                    <AccordionContent>{faq.description}</AccordionContent>
                  </AccordionItem>
                ))}
                </Accordion>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  )
}
