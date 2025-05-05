import FloatingButton from "@/components/cleaning/Floatingbutton";
import Footer from "@/components/cleaning/Footer";
import { Navbar } from "@/components/general/cleaning/Navbar";

export default function MainLayout({ children}: { children: React.ReactNode}) {
  return (
    <div>
        <div className="">
        <Navbar />
        {children}
        </div>
        <FloatingButton/>
        <Footer/>
    </div>
  )
}
