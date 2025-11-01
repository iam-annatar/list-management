import IconButton, {
  IconButtonSizes,
  IconButtonVariant,
} from "../../ui/buttons/IconButton";
import { AddIcon, ListIcon } from "../../ui/icons";

interface TriggerCreateListModalProps {
  onOpenCreateModal: () => void;
}

const TriggerCreateListModal = (props: TriggerCreateListModalProps) => {
  const { onOpenCreateModal } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="border-primary-border hover:bg-screen-secondary w-full max-w-[320px] cursor-pointer rounded-2xl border p-4 transition-all duration-150 ease-in"
      onClick={onOpenCreateModal}
    >
      <div className="flex items-center justify-between">
        <IconButton
          size={IconButtonSizes.M}
          variant={IconButtonVariant.Secondary}
          icon={<AddIcon />}
        />
        <IconButton
          size={IconButtonSizes.M}
          variant={IconButtonVariant.Primary}
          icon={<ListIcon />}
        />
      </div>
      <div className="mt-4 flex flex-col items-start gap-1">
        <span className="text-size-lg leading-6 font-semibold">
          Create a list
        </span>
        <span className="text-size-md text-secondary leading-6">
          Organize items into a new shortlist
        </span>
      </div>
    </div>
  );
};

export default TriggerCreateListModal;
