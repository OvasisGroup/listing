import { CalendarDemo } from "@/components/general/Calendar";
import CompanySummaryTable from "@/components/tables/CompanySummaryTable";
import JobSeekerSummary from "@/components/tables/JobSeekerSummary";
import { TableDemo } from "@/components/tables/TableDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";


export default async function Page() {
    const session = await auth();
    const name = session?.user?.name;
    const lastLogin = session?.user?.email;
    console.log("lastLogin", lastLogin);

    return (
        <section>
            <div className="flex items-center justify-between gap-2 mb-4">
                <h1 className="font-bold text-xl text-primary">Welcome Back {name?.charAt(0).toUpperCase()}{name?.slice(1).toLowerCase()}</h1>
                <p className="text-muted-foreground">Manage</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="col-span-1 lg:col-span-2 shadow-none">
                    <CardHeader>
                        <CardTitle className="">Dashboard</CardTitle>
                    </CardHeader>
                </Card>
                <div className="col-span-1">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Users</CardTitle>
                            <CardDescription>Manager Users</CardDescription>
                        </CardHeader>
                        <CardContent className="w-full">
                            <CalendarDemo/>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card>
                    <CardHeader className="flex items-center gap-2 justify-between">
                        <div>
                            <CardTitle className="text-primary text-xl font-bold">Companies</CardTitle>
                            <CardDescription>Manage Companies</CardDescription>
                        </div>
                        <Link href={'/admin/users/jobseekers'} className="flex gap-2 text-primary cursor-pointer">View All <span><ArrowRightIcon /></span></Link>
                    </CardHeader>
                    <CardContent>
                        <CompanySummaryTable />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex items-center gap-2 justify-between">
                        <div>
                            <CardTitle className="text-primary text-xl font-bold">Users</CardTitle>
                            <CardDescription>Manage Application Users</CardDescription>
                        </div>
                        <Link href={'/admin/users/jobseekers'} className="flex gap-2 text-primary cursor-pointer">View All <span><ArrowRightIcon /></span></Link>
                    </CardHeader>
                    <CardContent>
                        <TableDemo />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex items-center gap-2 justify-between">
                        <div>
                            <CardTitle className="text-primary text-xl font-bold">Job Seekers</CardTitle>
                            <CardDescription>Manage Job Seekers</CardDescription>
                        </div>
                        <Link href={'/admin/users/jobseekers'} className="flex gap-2 text-primary cursor-pointer">View All <span><ArrowRightIcon /></span></Link>
                    </CardHeader>
                    <CardContent>
                        <JobSeekerSummary />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
