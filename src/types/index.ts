export interface FormListData {
  title: string;
  subtitle: string;
}

export interface ListItem extends FormListData {
  id: string;
  createdAt: string;
}
