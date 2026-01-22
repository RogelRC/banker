import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import PlusButton from "@/components/account/plus-button";
import Accounts from "@/components/account/accounts";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col relative">
      <SiteHeader title="Cuentas" />
      <Accounts />
      <div className="absolute bottom-4 right-4">
        <PlusButton />
      </div>
    </div>
  );
}
