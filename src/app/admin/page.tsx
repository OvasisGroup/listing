import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2 shadow-none">
            <CardHeader>
                <CardTitle className="text-primary">Dashboard</CardTitle>
            </CardHeader>
        </Card>
        <div className="col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                    <CardDescription>Manager Users</CardDescription>
                </CardHeader>
            </Card>
        </div>
    </div>
    
  )
}
