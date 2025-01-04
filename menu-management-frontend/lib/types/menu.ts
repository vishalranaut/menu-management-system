export interface MenuItem {
  id: string;
  name: string;
  parentId?: string | null;
  depth: number;
  children?: MenuItem[];
}

export interface MenuState {
  selectedId: string | null;
  expandedIds: Set<string>;
}

export interface MenuFormData {
  name: string;
  depth?: number;
  parentData?: string;
}

export interface MenuFormProps {
  id: string;
  depth: number;
  parentData: string;
  name: string;
  onSave: (data: MenuFormData) => Promise<void>;
  isLoading?: boolean;
}
