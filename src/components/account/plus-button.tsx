"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAccountForm } from "@/hooks/accounts/use-account-form";
import { Textarea } from "../ui/textarea";

export default function PlusButton() {
  const { formData, handleChange, handleSubmit } = useAccountForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="contents" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Crear cuenta</DialogTitle>
            <DialogDescription>
              Llena los siguientes campos para crear una nueva cuenta.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="code">Codigo</Label>
              <Input
                id="code"
                name="code"
                type="number"
                value={formData.code}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="destination">Destino</Label>
              <Input
                id="destination"
                name="destination"
                type="text"
                value={formData.destination}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-2">
              <div className="grid gap-3 w-2/3">
                <Label htmlFor="balance">Balance</Label>
                <Input
                  id="balance"
                  name="balance"
                  type="number"
                  value={formData.balance}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3 w-1/3">
                <Label htmlFor="currency">Moneda</Label>
                <Input
                  id="currency"
                  name="currency"
                  type="text"
                  value={formData.currency}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="comment">Comentario</Label>
              <Textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="color">Color</Label>
              <Input
                type="color"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Guardar cambios</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
