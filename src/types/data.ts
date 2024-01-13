export interface TreeItemData {
  id: string;
  name: string;
  creator: string;
  type: 'folder' | 'file';
  highlighted?: boolean;
  children?: TreeItemData[];
}