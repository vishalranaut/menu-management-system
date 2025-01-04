import { MenuItem, MenuFormData } from "@/lib/types/menu";
import { API_BASE_URL } from "./config";

async function fetchWithErrorHandling<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error ${response.status}: ${response.statusText} - ${errorText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export async function updateMenu(
  id: string,
  data: MenuFormData
): Promise<MenuItem> {
  return await fetchWithErrorHandling<MenuItem>(`${API_BASE_URL}/menu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function fetchMenus(): Promise<MenuItem[]> {
  return await fetchWithErrorHandling<MenuItem[]>(`${API_BASE_URL}/menu/list`);
}

export async function fetchMenuById(id: string): Promise<MenuItem> {
  return await fetchWithErrorHandling<MenuItem>(`${API_BASE_URL}/menu/${id}`);
}

export async function createMenuItem(
  data: Omit<MenuItem, "id">
): Promise<MenuItem> {
  return await fetchWithErrorHandling<MenuItem>(`${API_BASE_URL}/menu/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteMenu(id: string): Promise<void> {
  await fetchWithErrorHandling<void>(`${API_BASE_URL}/menu/${id}`, {
    method: "DELETE",
  });
}

export async function listMenus(): Promise<MenuItem[]> {
  return fetchMenus();
}
