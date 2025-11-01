import { useEffect } from "react";
import { Controller } from "react-hook-form";

import type { FormListData, ListItem } from "../../../types";

import { useManageListForm } from "../../../hooks/useManageListForm";
import Modal from "../../shared/Modal";
import TextButton, {
  TextButtonSizes,
  TextButtonVariants,
} from "../../ui/buttons/TextButton";
import { AddIcon } from "../../ui/icons";
import Input from "../../ui/Input";

interface ManageListModalProps {
  isOpen: boolean;
  modalMode: "create" | "edit";
  initialValues: ListItem | null;
  onCreate: (item: ListItem) => void;
  onEdit: (updatedItem: ListItem) => void;
  onClose: () => void;
}

const ManageListModal = (props: ManageListModalProps) => {
  const { isOpen, modalMode, initialValues, onCreate, onEdit, onClose } = props;

  const { control, handleSubmit, reset } = useManageListForm();

  useEffect(() => {
    if (isOpen && modalMode === "edit" && initialValues) {
      reset({
        title: initialValues?.title,
        subtitle: initialValues?.subtitle,
      });
    }

    if (isOpen && modalMode === "create") {
      reset({
        title: "",
        subtitle: "",
      });
    }
  }, [isOpen, modalMode, initialValues, reset]);

  const onSubmitForm = (data: FormListData) => {
    const date = new Date();

    if (modalMode === "create") {
      const newItem: ListItem = {
        id: crypto.randomUUID().slice(0, 8),
        createdAt: date.toString(),
        title: data.title,
        subtitle: data.subtitle,
      };

      onCreate(newItem);
    } else if (initialValues) {
      const updatedItem: ListItem = {
        id: initialValues.id,
        createdAt: new Date().toString(),
        title: data.title,
        subtitle: data.subtitle,
      };

      onEdit(updatedItem);
    }

    onClose();
    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={modalMode === "create" ? "Create a List" : "Edit List"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex w-full flex-col gap-5">
          <div
            aria-label="list title"
            className="laptop:flex-row laptop:items-end flex w-full flex-col items-start gap-4"
          >
            <Controller
              name="title"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  inputId="list-title"
                  label="Title"
                  name="list-title"
                  type="text"
                  value={value}
                  errorMessage={error?.message}
                  onChange={onChange}
                  placeholder="Enter your title"
                />
              )}
            />
          </div>
          <div
            aria-label="list subtitle"
            className="flex w-full flex-1 flex-col items-start gap-2"
          >
            <Controller
              name="subtitle"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  inputId="list-subtitle"
                  label="Subtitle"
                  name="list-subtitle"
                  type="text"
                  value={value}
                  errorMessage={error?.message}
                  onChange={onChange}
                  placeholder="Enter your subtitle"
                />
              )}
            />
          </div>
        </div>

        <TextButton
          size={TextButtonSizes.M}
          className="ms-auto mt-6"
          label={modalMode === "create" ? "Create" : "Save"}
          type="submit"
          variant={TextButtonVariants.Secondary}
          icon={modalMode === "create" ? <AddIcon /> : undefined}
          onClick={handleSubmit(onSubmitForm)}
        />
      </form>
    </Modal>
  );
};

export default ManageListModal;
