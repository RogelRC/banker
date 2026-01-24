import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

export default function AccountCard({ account }: { account: any }) {
  return (
    <Card
      className="w-full cursor-pointer"
      style={{ borderTop: `6px solid ${account.color}` }}
      key={account.code}
      onClick={() => (window.location.href = `/accounts/id?id=${account.code}`)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span>{account.name}</span>
            <span className="text-2xl">
              {account.code
                .toString()
                .replace(/(.{4})/g, "$1-")
                .slice(0, -1)}
            </span>
          </div>
        </CardTitle>
        <CardDescription>{account.destiny}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <span>{account.comment}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <div className="flex gap-2 text-2xl mr-auto">
          <span>{account.balance.toLocaleString()}</span>
          <span className="font-bold">{account.currency}</span>
        </div>
        <Button
          variant={"outline"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <GoPencil />
        </Button>
        <Button
          variant={"outline"}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {account.visible ? <FaRegEye /> : <FaRegEyeSlash />}
        </Button>
      </CardFooter>
    </Card>
  );
}
