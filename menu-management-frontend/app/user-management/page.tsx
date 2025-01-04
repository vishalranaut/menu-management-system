"use client";

import { Sidebar } from "@/components/sidebar";
import { Folder } from "lucide-react";

export default function UserManagementPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-4 py-2 space-x-2">
          <Folder className="text-gray-600 w-5 h-5 fill-gray-100" />
          <span className="text-gray-600 text-sm">
            <span>/</span>
            <span className="ml-1">User Management</span>
          </span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            User Management
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This page allows you to manage user accounts and profiles in the
            system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                User Accounts
              </h2>
              <p className="text-gray-600">
                Manage user accounts, including creation, updates, and
                deletions.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                User Profiles
              </h2>
              <p className="text-gray-600">
                View and update user profiles, including personal information
                and settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
