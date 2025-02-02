"use client";
import { useEffect, useState } from "react";
import { MenuItem } from "@/lib/types/menu";
import { Button } from "@/components/ui/button";
import { MenuTreeItem } from "@/components/menu-tree-item";
import { useMenuTree } from "@/lib/hooks/use-menu-tree";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchMenus } from "@/lib/api/menu";
import { useSelectedMenu } from "@/lib/hooks/use-selected-menu";

export function MenuTree() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { setSelectedMenu } = useSelectedMenu();

  const { menuState, toggleExpand, selectItem, expandAll, collapseAll } =
    useMenuTree(menus);

  const [activeButton, setActiveButton] = useState<
    "expand" | "collapse" | null
  >(null);

  useEffect(() => {
    async function getMenus() {
      try {
        const fetchedMenus = await fetchMenus();
        setMenus(fetchedMenus);
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    }
    getMenus();
  }, []);

  const handleExpandAll = () => {
    setActiveButton("expand");
    expandAll(menus);
  };

  const handleCollapseAll = () => {
    setActiveButton("collapse");
    collapseAll();
  };

  const handleActionChange = (value: string) => {
    try {
      const menu = JSON.parse(value);
      setSelectedMenu(menu);
    } catch (error) {
      console.error("Error parsing menu:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <span className="text-gray-400 mb-2 block">Menu</span>

      <div className="mb-4">
        <Select onValueChange={handleActionChange}>
          <SelectTrigger className="w-1/2">
            <SelectValue placeholder="Select an action" />
          </SelectTrigger>
          <SelectContent>
            {menus.map((menu) => (
              <SelectItem key={menu.id} value={JSON.stringify(menu)}>
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
          onClick={handleExpandAll}
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
          onClick={handleCollapseAll}
        >
          Collapse All
        </Button>
      </div>

      <div
        className="space-y-0.5 overflow-y-auto max-h-96 border rounded-md p-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200 scrollbar-rounded-lg"
        style={{ scrollBehavior: "smooth" }}
      >
        {menus.map((menu, index) => (
          <MenuTreeItem
            key={menu.id}
            item={menu}
            isLast={index === menus.length - 1}
            isExpanded={menuState.expandedIds.has(menu.id)}
            isSelected={menuState.selectedId === menu.id}
            expandedIds={menuState.expandedIds}
            selectedId={menuState.selectedId}
            onToggle={toggleExpand}
            onSelect={selectItem}
          />
        ))}
      </div>
    </div>
  );
}
