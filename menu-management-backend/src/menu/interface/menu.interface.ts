export interface Menu {
  id: string;
  name: string;
  parentId?: string | null;
  parent?: Menu | null;
  children?: Menu[];
  depth: number;
  order: number;
}
