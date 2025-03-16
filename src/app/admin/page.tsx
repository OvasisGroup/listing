import { TableDemo } from "@/components/tables/TableDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";


export default async function Page() {
    const session = await auth();
    const name  = session?.user?.name;
  return (
    <section>
        <div className="flex items-center justify-between gap-2 mb-4">
        <h1 className="font-bold text-xl text-primary">Welcome Back {name?.charAt(0).toUpperCase()}{name?.slice(1).toLowerCase()}</h1>
        <p className="text-muted-foreground">Manage your account and company</p>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 shadow-none">
            <CardHeader>
                <CardTitle className="">Dashboard</CardTitle>
            </CardHeader>
        </Card>
        <div className="col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Manager Users o</CardDescription>
                    
                </CardHeader>
                <CardContent>
                    <TableDemo />
                    </CardContent>
            </Card>
        </div>
    </div>
    </section>
  )
}
