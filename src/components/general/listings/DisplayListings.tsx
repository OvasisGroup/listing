import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Badge } from '@/components/ui/badge';

type SubCategory = {
  id: string;
  name: string;
};

type ListingProps = {
  title: string;
  description: string;
  budget: number;
  location: string;
  estateName: string;
  apartmentNumber: string;
  status: string;
  startDate: string;
  endDate: string;
  user: {
    name: string;
    email: string;
    image: string;
    userType: string;
  };
  subCategories: SubCategory[];
  payment: {
    amount: number;
    method: string;
    status: string;
  };
};

export function ListingCard({
  title,
  description,
  budget,
  location,
  estateName,
  apartmentNumber,
  status,
  startDate,
  endDate,
  user,
  subCategories,
  payment,
}: ListingProps) {
  return (
    <Card className="w-full max-w-3xl p-4 shadow-md rounded-2xl">
      <CardContent>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <Badge variant="outline" className="capitalize">
            {status}
          </Badge>
        </div>

        <p className="text-gray-600 mt-1">{description}</p>

        <div className="mt-4 space-y-1 text-sm text-muted-foreground">
          <div>
            <strong>Budget:</strong> KES {budget}
          </div>
          <div>
            <strong>Location:</strong> {location} — {estateName}, Apt: {apartmentNumber}
          </div>
          <div>
            <strong>Start Date:</strong> {format(new Date(startDate), "PPP")}
          </div>
          <div>
            <strong>End Date:</strong> {format(new Date(endDate), "PPP")}
          </div>
        </div>

        <div className="mt-4">
          <strong>Subcategories:</strong>
          <div className="flex gap-2 mt-1 flex-wrap">
            {subCategories.map((sub) => (
              <Badge key={sub.id} variant="secondary">
                {sub.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-muted-foreground">{user.email}</div>
            <div className="text-xs capitalize">{user.userType.replace("_", " ")}</div>
          </div>
        </div>

        <div className="mt-4 text-sm">
          <strong>Payment:</strong> {payment.amount} KES via {payment.method} (
          <span className="capitalize">{payment.status}</span>)
        </div>
      </CardContent>
    </Card>
  );
}
