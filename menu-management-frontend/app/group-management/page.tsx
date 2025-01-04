"use client";
import { Sidebar } from "@/components/sidebar";
import { Folder } from "lucide-react";
export default function GroupManagementPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-4 py-2 space-x-2">
          <Folder className="text-gray-600 w-5 h-5 fill-gray-100" />
          <span className="text-gray-600 text-sm">
            <span>/</span>
            <span className="ml-1">Group Management</span>
          </span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Group Management
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This page allows you to manage groups in the system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Menus
              </h2>
              <p className="text-gray-600">
                View and manage the available groups from the menu. Select a
                group to proceed with managing its details.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Details
              </h2>
              <p className="text-gray-600">
                Select a group from the menu to manage its details. You can add,
                remove, or edit group members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
