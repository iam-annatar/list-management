import { Controller } from "react-hook-form";

import type { FormListData } from "../../types";

import { useCreateListForm } from "../../hooks/useCreateListForm";
import Modal from "../shared/Modal";
import TextButton, {
  TextButtonSizes,
  TextButtonVariants,
} from "../ui/buttons/TextButton";
import { AddIcon } from "../ui/icons";
import Input from "../ui/Input";

interface CreateListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateListModal = (props: CreateListModalProps) => {
  const { isOpen, onClose } = props;

  const { control, handleSubmit } = useCreateListForm();

  const onSubmitForm = (data: FormListData) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} title="Create a List" onClose={onClose}>
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
          label="Create"
          type="submit"
          variant={TextButtonVariants.Secondary}
          icon={<AddIcon />}
          onClick={handleSubmit(onSubmitForm)}
        />
      </form>
    </Modal>
  );
};

export default CreateListModal;
