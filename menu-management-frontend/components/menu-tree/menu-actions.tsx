"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MenuItem } from "@/lib/types/menu";

interface MenuActionsProps {
  menus: MenuItem[];
  activeButton: "expand" | "collapse" | null;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  onActionChange: (value: string) => void;
}

export function MenuActions({
  menus,
  activeButton,
  onExpandAll,
  onCollapseAll,
  onActionChange,
}: MenuActionsProps) {
  return (
    <>
      <div className="mb-4">
        <Select onValueChange={onActionChange}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Select an action" />
          </SelectTrigger>
          <SelectContent>
            {menus.map((menu) => (
              <SelectItem key={menu.id} value={menu.id}>
                {menu.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          className={`${
            activeButton === "expand"
              ? "bg-black text-white"
              : "text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200"
          }`}
          onClick={onExpandAll}
        >
          Expand All
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={`${
            activeButton === "collapse"
              ? "bg-black text-white"
              : "text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200"
          }`}
          onClick={onCollapseAll}
        >
          Collapse All
        </Button>
      </div>
    </>
  );
}