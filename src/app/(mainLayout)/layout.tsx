import ChatButton from "@/components/general/ChatButton";
import { CookiesConsent } from "@/components/general/CookieConsent";
import Footer from "@/components/general/Footer";
import { Navbar } from "@/components/general/Navbar";
import { SessionProvider } from "next-auth/react";

export default function MainLayout({ children}: { children: React.ReactNode}) {
  return (
    <SessionProvider>
    <div>
       <Navbar/>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
        </div>
        <CookiesConsent />
        <ChatButton />
        <Footer/>
    </div>
    </SessionProvider>
  )
}
