import { useState } from "react";

import type { ListItem } from "../types";

const useListManagement = () => {
  const [lists, setLists] = useState<ListItem[]>([]);

  const createList = (item: ListItem) => {
    setLists((prev) => [...prev, item]);
  };

  const editListItem = (updatedItem: ListItem) => {
    setLists((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  };

  const deleteListItem = (itemId: string) => {
    const filteredList = lists.filter((list) => list.id !== itemId);
    setLists(filteredList);
  };

  return {
    lists,
    createList,
    editListItem,
    deleteListItem,
  };
};

export default useListManagement;
