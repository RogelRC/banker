"use client";

import { useAccountsPreview } from "@/hooks/accounts/use-accounts-preview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Pencil } from "lucide-react";

export default function Accounts() {
  const { accounts } = useAccountsPreview();

  return (
    <div className="flex p-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
        {accounts.map((account) => (
          <Card
            className="w-full cursor-pointer"
            style={{ borderTop: `6px solid ${account.color}` }}
            key={account.code}
            onClick={() =>
              (window.location.href = `/accounts/id?id=${account.code}`)
            }
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
                <Pencil />
              </Button>
              <Button
                variant={"outline"}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {account.visible ? <Eye /> : <EyeOff />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
