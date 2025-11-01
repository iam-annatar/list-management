import { useState } from "react";

import type { ListItem } from "./types";

import ListsEmptyState from "./components/EmptyState";
import ListItemCard from "./components/ListItemCard";
import { ManageListModal } from "./components/modals";
import TriggerCreateListModal from "./components/shared/TriggerCreateListModal";
import useListManagement from "./hooks/useListManagement";

function App() {
  const [isManageListModalOpen, setIsManageListModalOpen] =
    useState<boolean>(false);
  const [modalMode, tooggleModalMode] = useState<"create" | "edit">("create");
  const [selectedList, setSelectedList] = useState<ListItem | null>(null);

  const { lists, createList, editListItem, deleteListItem } =
    useListManagement();

  const openCreateModal = () => {
    tooggleModalMode("create");
    setSelectedList(null);
    setIsManageListModalOpen(true);
  };

  const openEditModal = (item: ListItem) => {
    tooggleModalMode("edit");
    setSelectedList(item);
    setIsManageListModalOpen(true);
  };

  return (
    <>
      {!lists.length ? (
        <ListsEmptyState
          onOpenCreateModal={() => setIsManageListModalOpen(true)}
        />
      ) : (
        <section
          aria-label="lists management"
          className="w-full px-5 pt-5 md:pt-20"
        >
          <div className="mb-8">
            <TriggerCreateListModal onOpenCreateModal={openCreateModal} />
          </div>
          <div
            aria-label="Added Lists Page title"
            className="flex w-full items-center gap-7"
          >
            <p className="text-size-xl leading-8 font-bold text-nowrap">
              Created Lists
            </p>
            <div className="bg-primary-border h-px w-full" />
          </div>
          <div className="flex w-full flex-col gap-7">
            <p className="text-size-lg text-secondary leading-7">
              Here you can manage your lists easily.
            </p>
            <ul className="grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 lg:grid-cols-3">
              {lists?.map((list) => (
                <li key={list.id}>
                  <ListItemCard
                    onDelete={deleteListItem}
                    onOpenEditModal={() => openEditModal(list)}
                    {...list}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ManageListModal
        initialValues={selectedList}
        isOpen={isManageListModalOpen}
        modalMode={modalMode}
        onClose={() => setIsManageListModalOpen(false)}
        onCreate={createList}
        onEdit={editListItem}
      />
    </>
  );
}

export default App;
