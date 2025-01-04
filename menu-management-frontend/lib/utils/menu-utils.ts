import { v4 as uuidv4 } from "uuid";
import { MenuItem } from "@/lib/types/menu";

export function calculateMenuDepth(
  parentId: string | null,
  menus: MenuItem[]
): number {
  if (!parentId) return 0;

  const findDepth = (items: MenuItem[], targetId: string): number => {
    for (const item of items) {
      if (item.id === targetId) {
        return item.depth;
      }
      if (item.children?.length) {
        const depth = findDepth(item.children, targetId);
        if (depth >= 0) return depth;
      }
    }
    return -1;
  };

  const parentDepth = findDepth(menus, parentId);
  return parentDepth >= 0 ? parentDepth + 1 : 0;
}

export function generateMenuId(): string {
  return uuidv4();
}

export function findMenuItemById(
  menus: MenuItem[],
  id: string
): MenuItem | null {
  for (const menu of menus) {
    if (menu.id === id) return menu;
    if (menu.children?.length) {
      const found = findMenuItemById(menu.children, id);
      if (found) return found;
    }
  }
  return null;
}

export function getParentName(
  menus: MenuItem[],
  parentId: string | null
): string {
  if (!parentId) return "Root";
  const parent = findMenuItemById(menus, parentId);
  return parent?.name || "Unknown";
}
