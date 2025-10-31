import IconButton, {
  IconButtonSizes,
  IconButtonVariant,
} from "../../buttons/IconButton";
import { AddIcon, ListIcon } from "../../icons";

const TriggerCreateListModal = () => {
  return (
    <button
      className="border-primary-border hover:bg-screen-secondary w-full max-w-[320px] cursor-pointer rounded-2xl border p-4 transition-all duration-150 ease-in"
      type="button"
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
    </button>
  );
};

export default TriggerCreateListModal;
