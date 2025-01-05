"use client";

import { Folder } from "lucide-react";

export default function PropertiesPage() {
  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-4 py-2 space-x-2">
          <Folder className="text-gray-600 w-5 h-5 fill-gray-100" />
          <span className="text-gray-600 text-sm">
            <span>/</span>
            <span className="ml-1">Properties</span>
          </span>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            Properties
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Manage system properties and configurations here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                System Properties
              </h2>
              <p className="text-gray-600">
                View and manage the various system properties. Adjust
                configurations according to your needs.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Configuration Management
              </h2>
              <p className="text-gray-600">
                Configure and customize the settings for system features and
                parameters here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
