import type { JSX } from "react";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import IconButton, {
  IconButtonSizes,
  IconButtonVariant,
} from "../../ui/buttons/IconButton";
import { Dismiss } from "../../ui/icons";

interface ModalProps {
  isOpen: boolean;
  children: JSX.Element;
  title: string;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    children,
    title,
    closeOnOutsideClick = true,
    closeOnEscape = true,
  } = props;

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Handle ESC key press
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Handle outside click
  const handleBackdropClick = (e: any) => {
    if (
      closeOnOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      onClick={(e) => handleBackdropClick(e)}
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className={clsx(
          "bg-backDrop fixed inset-0 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        aria-labelledby={title ? "modal-title" : undefined}
        className="animate-slide-up sm:animate-scale-in bg-screen-secondary shadow-overlay relative z-50 flex max-h-[90vh] w-full flex-col rounded-t-3xl sm:max-w-[600px] sm:rounded-2xl"
        ref={modalRef}
        aria-modal="true"
        role="dialog"
      >
        <div className="border-primary-border/20 flex items-center justify-between border-b px-6 py-4">
          {title && (
            <h2
              className="text-size-xl sm:text-size-2xl leading-7 font-semibold sm:leading-8"
              id="modal-title"
            >
              {title}
            </h2>
          )}
          <IconButton
            size={IconButtonSizes.S}
            variant={IconButtonVariant.Primary}
            icon={<Dismiss />}
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
