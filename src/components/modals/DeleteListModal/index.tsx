import Modal from "../../shared/Modal";
import TextButton, {
  TextButtonSizes,
  TextButtonVariants,
} from "../../ui/buttons/TextButton";

interface DeleteListModalProps {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

const DeleteListModal = (props: DeleteListModalProps) => {
  const { isOpen, onDelete, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      title="Are you sure about delete this list?"
      onClose={onClose}
    >
      <div className="flex flex-col">
        <p className="text-size-lg text-secondary mb-6 leading-7 font-normal">
          This action cannot be undone !
        </p>
        <div className="flex w-full items-center gap-3">
          <TextButton
            size={TextButtonSizes.L}
            label="Cancel"
            type="button"
            variant={TextButtonVariants.Primary}
            onClick={onClose}
          />
          <TextButton
            size={TextButtonSizes.L}
            label="Delete"
            type="button"
            variant={TextButtonVariants.Destructive}
            onClick={onDelete}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteListModal;
