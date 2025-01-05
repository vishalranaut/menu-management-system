"use client";

import { MenuItem } from "@/lib/types/menu";
import { Button } from "@/components/ui/button";
import { TreeLine } from "@/components/ui/tree-line";
import { ChevronRight, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useSelectedMenu } from "@/lib/hooks/use-selected-menu";

interface MenuTreeItemProps {
  item: MenuItem;
  depth?: number;
  isLast?: boolean;
  isExpanded: boolean;
  isSelected: boolean;
  expandedIds: Set<string>;
  selectedId: string | null;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}

export function MenuTreeItem({
  item,
  depth = 0,
  isLast = false,
  isExpanded,
  isSelected,
  expandedIds,
  selectedId,
  onToggle,
  onSelect,
}: MenuTreeItemProps) {
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = depth > 0 ? depth * 24 + 32 : 8;
  const { setSelectedMenu } = useSelectedMenu();
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(item.id);
  };
  const handleAction = (value: string) => {
    try {
      const menu = JSON.parse(value);
      setSelectedMenu(menu);
    } catch (error) {
      console.error("Error parsing menu:", error);
    }
  };
  return (
    <div className="relative">
      <TreeLine depth={depth} isLast={isLast} hasChildren={hasChildren} />
      <Collapsible open={isExpanded}>
        <div
          className={cn(
            "flex items-center py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md cursor-pointer group relative",
            isSelected && "bg-gray-100 dark:bg-neutral-700"
          )}
          style={{ paddingLeft: `${paddingLeft}px`, paddingRight: "8px" }}
          onClick={() => onSelect(item.id)}
        >
          {hasChildren && (
            <CollapsibleTrigger asChild onClick={handleToggle}>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 p-0 hover:bg-gray-200 dark:hover:bg-neutral-600"
              >
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-gray-600 dark:text-neutral-400 transition-transform duration-200",
                    isExpanded && "rotate-90"
                  )}
                />
              </Button>
            </CollapsibleTrigger>
          )}
          <span
            className={cn(
              "ml-2 text-sm text-gray-800 dark:text-neutral-200",
              isSelected && "font-medium"
            )}
          >
            {item.name}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 ml-auto rounded-full bg-blue-700 opacity-0 group-hover:opacity-100 hover:bg-blue-600 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              handleAction(JSON.stringify(item));
            }}
          >
            <Plus className="h-4 w-4 text-white" />
          </Button>
        </div>
        {hasChildren && (
          <CollapsibleContent>
            <div className="relative">
              {item.children?.map((child, index) => (
                <MenuTreeItem
                  key={child.id}
                  item={child}
                  depth={depth + 1}
                  isLast={index === item.children!.length - 1}
                  isExpanded={expandedIds.has(child.id)}
                  isSelected={selectedId === child.id}
                  expandedIds={expandedIds}
                  selectedId={selectedId}
                  onToggle={onToggle}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
}
