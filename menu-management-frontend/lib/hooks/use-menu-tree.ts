"use client";

import { useState, useCallback } from "react";
import { MenuItem, MenuState } from "@/lib/types/menu";

export function useMenuTree(initialMenus: MenuItem[]) {
  const [menuState, setMenuState] = useState<MenuState>({
    selectedId: null,
    expandedIds: new Set([initialMenus[0]?.id]),
  });

  const toggleExpand = useCallback(
    (id: string) => {
      setMenuState((prev) => {
        const newExpanded = new Set(prev.expandedIds);
        if (newExpanded.has(id)) {
          const collapseChildren = (item: MenuItem) => {
            if (item.id === id) {
              newExpanded.delete(item.id);
              item.children?.forEach((child) => {
                collapseChildren(child);
              });
            }
          };

          initialMenus.forEach((menu) => {
            const findAndCollapse = (item: MenuItem) => {
              collapseChildren(item);
              item.children?.forEach((child) => findAndCollapse(child));
            };
            findAndCollapse(menu);
          });
        } else {
          newExpanded.add(id);
        }
        return { ...prev, expandedIds: newExpanded };
      });
    },
    [initialMenus]
  );

  const selectItem = useCallback((id: string) => {
    setMenuState((prev) => ({ ...prev, selectedId: id }));
  }, []);

  const expandAll = useCallback((items: MenuItem[]) => {
    const getAllIds = (items: MenuItem[]): string[] => {
      return items.reduce((acc: string[], item) => {
        acc.push(item.id);
        if (item.children) {
          acc.push(...getAllIds(item.children));
        }
        return acc;
      }, []);
    };

    setMenuState((prev) => ({
      ...prev,
      expandedIds: new Set(getAllIds(items)),
    }));
  }, []);

  const collapseAll = useCallback(() => {
    setMenuState((prev) => ({
      ...prev,
      expandedIds: new Set(),
    }));
  }, []);

  return {
    menuState,
    toggleExpand,
    selectItem,
    expandAll,
    collapseAll,
  };
}
