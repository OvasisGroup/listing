import { AppSidebar } from "@/components/app-sidebar";
import AdminNavbar from "@/components/general/AdminNavbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";



export default async  function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }
  return (
    <SidebarProvider>
      <AppSidebar className="border-r-1"/>
      <main className="flex flex-col w-full">
        <header  className="border-b-1">
          <div className="flex items-center justify-between py-4 w-full px-4 ">
        <SidebarTrigger className="-ml-1" />
        <AdminNavbar/>
        </div>
        </header>
        <div className="p-6">
        {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
