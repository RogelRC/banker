"use client";

import { useAccountsPreview } from "@/hooks/accounts/use-accounts-preview";
import AccountCard from "./accoun-card";

export default function Accounts() {
  const { accounts } = useAccountsPreview();

  return (
    <div className="flex p-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
        {accounts.map((account) => (
          <AccountCard account={account} key={account.code} />
        ))}
      </div>
    </div>
  );
}
