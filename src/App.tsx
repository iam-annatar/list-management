import { useState } from "react";

import CreateListModal from "./components/CreateListModal";
import ListsEmptyState from "./components/EmptyState";

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  return (
    <>
      <ListsEmptyState onOpenCreateModal={() => setIsCreateModalOpen(true)} />
      <CreateListModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}

export default App;
