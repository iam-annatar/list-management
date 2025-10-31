import TriggerCreateListModal from "../shared/TriggerCreateListModal";

const ListsEmptyState = () => {
  return (
    <section
      aria-label="List management intro"
      className="flex h-screen flex-col items-center justify-center"
    >
      <h1 className="text-size-xl text-center leading-8 font-semibold">
        Create Your First List!
      </h1>
      <p className="text-secondary mt-2 mb-5 text-center text-lg leading-7">
        You can see and manage your lists once you create one.
      </p>
      <TriggerCreateListModal />
    </section>
  );
};

export default ListsEmptyState;
