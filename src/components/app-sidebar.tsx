"use client"

import * as React from "react"
import {
  LayoutList,
  Users,
  Frame,
  User,
  Map,
  PieChart,
  Send,
  Settings2,
  LayoutDashboard
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Users,
      items: [
        {
          title: "Job Seekers",
          url: "/admin/users/jobseekers",
        },
        {
          title: "Companies",
          url: "/admin/users/companies",
        },
        {
          title: "Administrators",
          url: "/admin/users/admins",
        },
      ],
    },
    {
      title: "Categories",
      url: "/admin/categories",
      icon: LayoutList,
    },
    {
      title: "SubCategories",
      url: "/admin/categories/subcategories",
      icon: Settings2,
    },

    {
      title: "Jobs",
      url: "/admin/jobs",
      icon: LayoutDashboard,
    },

    {
      title: "Legal",
      url: "/admin/legal",
      icon: LayoutDashboard,
    },

    {
      title: "Premium",
      url: "/admin/premium",
      icon: LayoutDashboard,
    },

    {
      title: "About",
      url: "/admin/about",
      icon: LayoutDashboard,
    },

    {
      title: "Why Choose Us",
      url: "/admin/whychooseus",
      icon: LayoutDashboard,
    },

    {
      title: "FAQs",
      url: "/admin/faqs",
      icon: LayoutDashboard,
    },

    {
      title: "Finance my Project",
      url: "/admin/finance",
      icon: LayoutDashboard,
    },

    {
      title: "Safety",
      url: "/admin/safety",
      icon: LayoutDashboard,
    },

    {
      title: "Expert Tips",
      url: "/admin/expert_tips",
      icon: LayoutDashboard,
    },

    {
      title: "TVETS",
      url: "/admin/tvets",
      icon: LayoutDashboard,
    },

    {
      title: "Payments",
      url: "/admin/payment",
      icon: LayoutDashboard,
    }

  ],
  navSecondary: [
    {
      title: "Profile",
      url: "/admin/profile",
      icon: User,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Main Categories",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sub Categories",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Bookings",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={'/'}>
               <Image src={'/images/mrkim-logo.svg'} alt={'Mr_Kim_Logo'} width={150} height={100} className='self-center' />
            </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
