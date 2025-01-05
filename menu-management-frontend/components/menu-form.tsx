"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createMenuItem } from "@/lib/api/menu";
import { useSelectedMenu } from "@/lib/hooks/use-selected-menu";
import { v4 as uuidv4 } from "uuid";

interface MenuFormProps {
  name: string;
  onSave: (data: { name: string }) => void;
}

export function MenuForm({ name: initialName, onSave }: MenuFormProps) {
  const { selectedMenu } = useSelectedMenu();
  const [name, setName] = useState(initialName);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const [id] = useState<string>(uuidv4());

  const [depth, setDepth] = useState<number>(selectedMenu?.depth || 0);
  const [parentId, setParentId] = useState<string | null>(
    selectedMenu?.id || null
  );
  const [parentName, setParentName] = useState<string | null>(
    selectedMenu?.name || null
  );

  useEffect(() => {
    if (selectedMenu) {
      setDepth(selectedMenu.depth + 1);
      setParentId(selectedMenu.id);
      setParentName(selectedMenu.name);
    }
  }, [selectedMenu]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError("Name cannot be empty.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const menuItem = {
        name,
        depth,
        parentId,
      };
      await createMenuItem(menuItem);
      setSuccess(true);
      onSave({ name });
    } catch (err) {
      console.error(err);
      setError("Failed to save menu item. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Card className="p-6 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="menuId">Menu ID</Label>
          <Input id="menuId" value={id} readOnly className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="depth">Depth</Label>
          <Input id="depth" value={depth} readOnly className="bg-muted" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="parentId">Parent</Label>
          <Input
            id="parentId"
            value={parentName ? parentName : "None"}
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
            placeholder="Enter menu name"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm">
            Menu item saved successfully!
          </p>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </Card>
    </form>
  );
}
