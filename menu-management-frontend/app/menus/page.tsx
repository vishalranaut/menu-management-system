"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { MenuTree } from "@/components/menu-tree";
import { MenuForm } from "@/components/menu-form";
import { Folder } from "lucide-react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { updateMenu } from "@/lib/api/menu";
import { MenuFormData } from "@/lib/types/menu";

export default function MenusPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (data: MenuFormData) => {
    setIsLoading(true);
    try {
      await updateMenu("56320ee9-6af6-11ed-a7ba-f220afe5e4a9", data);
      console.log("Menu updated successfully:", data);
    } catch (error) {
      console.error("Failed to update menu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-4 py-2 space-x-2">
          <Folder className="text-gray-600 w-5 h-5 fill-gray-100" />
          <span className="text-gray-600 text-sm">
            <span>/</span>
            <span className="ml-1">Menus</span>
          </span>
        </div>

        <div className="flex flex-1">
          <div className="w-1/2 border-r">
            <div className="h-16 flex items-center px-6">
              <h2 className="text-lg font-bold flex items-center">
                <span className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-2">
                  <WidgetsIcon className="text-white" />
                </span>
                Menus
              </h2>
            </div>
            <MenuTree />
          </div>

          <div className="w-1/2">
            <div className="h-16 flex items-center px-6">
              <h2 className="text-lg font-semibold">Menu Details</h2>
            </div>
            <MenuForm
              id="56320ee9-6af6-11ed-a7ba-f220afe5e4a9"
              depth={0}
              parentId={null}
              name="System Code"
              onSave={handleSave}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}