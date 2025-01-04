"use client";

import { useState, useEffect } from 'react';
import { MenuItem } from '@/lib/types/menu';
import { fetchMenus } from '@/lib/api/menu';

export function useMenuData() {
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMenus();
        setMenus(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load menus');
      } finally {
        setIsLoading(false);
      }
    };

    loadMenus();
  }, []);

  return { menus, isLoading, error };
}