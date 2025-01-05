"use client";
import { Folder } from "lucide-react";

export default function ApiListPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-4 py-2 space-x-2">
          <Folder className="text-gray-600 w-5 h-5 fill-gray-100" />
          <span className="text-gray-600 text-sm">
            <span>/</span>
            <span className="ml-1 font-medium">API List</span>
          </span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
            API List
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Manage and explore the available APIs in the system.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                API 1
              </h2>
              <p className="text-gray-600">
                This API provides access to system data and operations.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                API 2
              </h2>
              <p className="text-gray-600">
                Access user information and management features via this API.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                API 3
              </h2>
              <p className="text-gray-600">
                Retrieve details about system properties and configurations
                through this API.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
