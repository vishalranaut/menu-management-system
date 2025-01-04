"use client";

import { MenuItem } from "@/lib/types/menu";
import { MenuTreeItem } from "@/components/menu-tree-item";

interface MenuListProps {
  menus: MenuItem[];
  expandedIds: Set<string>;
  selectedId: string | null;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}

export function MenuList({
  menus,
  expandedIds,
  selectedId,
  onToggle,
  onSelect,
}: MenuListProps) {
  return (
    <div className="space-y-0.5">
      {menus.map((menu, index) => (
        <MenuTreeItem
          key={menu.id}
          item={menu}
          isLast={index === menus.length - 1}
          isExpanded={expandedIds.has(menu.id)}
          isSelected={selectedId === menu.id}
          expandedIds={expandedIds}
          selectedId={selectedId}
          onToggle={onToggle}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}