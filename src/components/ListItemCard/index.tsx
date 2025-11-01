import { useState } from "react";

import type { ListItem } from "../../types";

import { DeleteListModal } from "../modals";
import IconButton, {
  IconButtonSizes,
  IconButtonVariant,
} from "../ui/buttons/IconButton";
import { DeleteIcon, EditIcon, ListIcon } from "../ui/icons";

interface ListItemCardProps extends ListItem {
  onDelete: (itemId: string) => void;
  onOpenEditModal: () => void;
}

const ListItemCard = (props: ListItemCardProps) => {
  const { id, title, subtitle, createdAt, onOpenEditModal, onDelete } = props;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const onDeleteList = () => {
    onDelete(id);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="hover:bg-screen-secondary ring-primary-border flex min-h-[172px] w-full flex-col justify-between rounded-2xl bg-transparent p-3 ring-1 transition-all duration-150 lg:rounded-[18px] lg:p-4">
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center gap-3">
            <ListIcon />
            <span className="text-size-md lg:text-size-lg leading-[22px] font-semibold lg:leading-7">
              {title}
            </span>
          </div>
          <p className="text-secondary text-size-md lg:text-size-lg line-clamp-2 text-start leading-5 lg:leading-6">
            {subtitle}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-size-sm text-secondary line-clamp-1 text-start leading-5">
            {createdAt.slice(0, 21)}
          </span>
          <div className="flex shrink-0 items-center gap-3">
            <IconButton
              size={IconButtonSizes.S}
              variant={IconButtonVariant.Secondary}
              icon={<EditIcon />}
              onClick={onOpenEditModal}
            />
            <IconButton
              size={IconButtonSizes.S}
              variant={IconButtonVariant.Secondary}
              icon={<DeleteIcon />}
              onClick={() => setIsDeleteModalOpen(true)}
            />
          </div>
        </div>
      </div>

      <DeleteListModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={onDeleteList}
      />
    </>
  );
};

export default ListItemCard;
