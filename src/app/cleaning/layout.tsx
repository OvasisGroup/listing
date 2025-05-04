import FloatingButton from "@/components/cleaning/Floatingbutton";
import { Navbar } from "@/components/general/cleaning/Navbar";



export default function MainLayout({ children}: { children: React.ReactNode}) {
  return (
    <div>
        <div className="">
        <Navbar />
        {children}
        </div>
        <FloatingButton/>
    </div>
  )
}
