"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Folder, List, Terminal } from "lucide-react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Systems",
    icon: Folder,
    items: [
      { name: "System Code", path: "/system-code" },
      { name: "Properties", path: "/properties" },
      { name: "Menus", path: "/menus" },
      { name: "API List", path: "/api-list" },
    ],
  },
  {
    title: "Users & Groups",
    icon: Folder,
    items: [
      { name: "User Management", path: "/user-management" },
      { name: "Group Management", path: "/group-management" },
    ],
  },
  {
    title: "Competition",
    icon: Folder,
    items: [],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () =>
      sidebarItems.reduce((acc, section) => {
        acc[section.title] = false;
        return acc;
      }, {} as Record<string, boolean>)
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="relative border-r bg-gray-900 text-white h-screen w-64 rounded-lg hidden md:block">
      <div className="flex items-center h-16 px-4 border-b border-gray-700 justify-between">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={70}
          height={22}
          priority
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
        </svg>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)] px-2">
        <div className="space-y-2 py-4">
          {sidebarItems.map((section) => (
            <div key={section.title} className="space-y-1">
              <div
                className={cn(
                  "flex items-center justify-between px-3 py-2 text-sm font-semibold tracking-tight cursor-pointer rounded-lg hover:bg-gray-800",
                  section.items.some((item) => item.path === pathname) &&
                    "text-lime-500"
                )}
                onClick={() => toggleSection(section.title)}
              >
                <div className="flex items-center">
                  <section.icon
                    className={cn(
                      "mr-2 h-4 w-4",
                      section.items.some((item) => item.path === pathname) &&
                        "text-lime-500"
                    )}
                  />
                  {section.title}
                </div>
              </div>

              {openSections[section.title] &&
                section.items.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start py-2 text-sm font-semibold tracking-tight rounded-lg",
                        isActive
                          ? "bg-lime-500 text-black"
                          : "text-white hover:bg-gray-800"
                      )}
                      asChild
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Link href={item.path}>
                        <span className="flex items-center">
                          {/* Using WidgetsIcon with dynamic color */}
                          <WidgetsIcon
                            className={cn(
                              "mr-3 h-5 w-5",
                              isActive ? "text-black" : "text-white"
                            )}
                          />
                          {item.name}
                        </span>
                      </Link>
                    </Button>
                  );
                })}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
