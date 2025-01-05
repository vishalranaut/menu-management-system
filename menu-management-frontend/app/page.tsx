"use client";

import { ArrowRight, Layers, Settings, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex-1 p-8 overflow-auto">
        <header className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-12 w-1 bg-blue-600 rounded-full" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Menu Management Dashboard
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 ml-16 leading-relaxed">
            Streamline your system's navigation with our intuitive menu
            management tools. Create hierarchical structures, organize content,
            and optimize user experience with powerful categorization features.
          </p>
        </header>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Categories Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Menu Categories
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Define and manage different categories for your menus. Create
                intuitive navigation structures that guide users effectively.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                  Recent Categories
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "System Management",
                    "Users & Groups",
                    "Reports",
                    "Settings",
                    "Documentation",
                    "Support",
                  ].map((category) => (
                    <div
                      key={category}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 py-1"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submenu Management Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
                  <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Submenu Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create hierarchical menu structures with powerful submenu
                management. Organize options logically for enhanced user
                navigation.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Recent Submenus
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "System Settings",
                    "User Management",
                    "Access Control",
                    "Audit Logs",
                    "API Integrations",
                    "Data Backup",
                  ].map((submenu) => (
                    <div
                      key={submenu}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 py-1"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      <span>{submenu}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Menu Items
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Manage individual menu items with precision. Create, edit, and
                organize menu entries to build a seamless navigation experience.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Recent Items
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Dashboard",
                    "System Configuration",
                    "User List",
                    "Activity Logs",
                    "Security Settings",
                    "Notifications",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 py-1"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
