"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createMenuItem } from "@/lib/api/menu";
import { calculateMenuDepth, generateMenuId } from "@/lib/utils/menu-utils";
import { MenuItem } from "@/lib/types/menu";

interface MenuFormProps {
  menus: MenuItem[];
  selectedParentId: string | null;
  onSave: (data: MenuItem) => void;
}

export function MenuForm({ menus, selectedParentId, onSave }: MenuFormProps) {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [menuId] = useState(() => generateMenuId());
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    // Update depth when parent changes
    const newDepth = calculateMenuDepth(selectedParentId, menus);
    setDepth(newDepth);
  }, [selectedParentId, menus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const menuItem: MenuItem = {
        id: menuId,
        name,
        parentId: selectedParentId as string,
        depth,
      };

      await createMenuItem(menuItem);
      onSave(menuItem);
      setName(""); // Reset form
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save menu item");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="menuId">Menu ID</Label>
          <Input id="menuId" value={menuId} readOnly className="bg-muted" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="depth">Depth</Label>
          <Input id="depth" value={depth} readOnly className="bg-muted" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="parentId">Parent ID</Label>
          <Input
            id="parentId"
            value={selectedParentId || "Root"}
            readOnly
            className="bg-muted"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-primary/20 focus:border-primary"
            disabled={isLoading}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Menu"}
        </Button>
      </Card>
    </form>
  );
}
