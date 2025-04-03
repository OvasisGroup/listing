import ChatButton from "@/components/general/ChatButton";
import Footer from "@/components/general/Footer";
import { Navbar } from "@/components/general/Navbar";

export default function MainLayout({ children}: { children: React.ReactNode}) {
  return (
    <div>
       <Navbar/>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
        </div>
        <ChatButton />
        <Footer/>
    </div>
  )
}
