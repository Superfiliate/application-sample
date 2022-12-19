import { Dialog, Transition } from "@headlessui/react";
import cn from "lib/cn";
import {
  Dispatch,
  Fragment,
  ReactNode,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import { XLg } from "react-bootstrap-icons";

function Title({
  title,
  overlineText,
  className,
}: {
  title: ReactNode;
  overlineText?: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "text-center -tracking-widest font-semibold font-display pb-12",
        className
      )}
    >
      {overlineText && (
        <Dialog.Description className={"text-gray-900/70"}>
          {overlineText}
        </Dialog.Description>
      )}
      <Dialog.Title
        as="h3"
        className={"text-xl leading-9 -tracking-widest text-gray-900"}
      >
        {title}
      </Dialog.Title>
    </div>
  );
}

function Footer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border-t border-[#E0E0E0] bg-[#F5F5F5]", className)}>
      <div className="h-full flex sm:flex-row-reverse justify-between items-center p-6 lg:px-12 text-sm">
        {children}
      </div>
    </div>
  );
}

export default function ModalRoot({
  initialState = true,
  size = "lg",
  allowClose = true,
  showClose = false,
  onClose: onModalClose,
  children,
  open: externalOpen,
  setOpen: externalSetOpen,
  className,
}: {
  initialState?: boolean;
  allowClose?: boolean;
  showClose?: boolean;
  size?: "sm" | "md" | "lg" | "fit";
  open?: boolean;
  setOpen?: (_val: boolean) => void;
  onClose?: () => void;
  children: (arg: { close?: () => void }) => ReactNode;
  className?: string;
}) {
  let [open, setOpen] = useState(initialState);
  open = typeof externalOpen === "boolean" ? externalOpen : open;
  setOpen = externalSetOpen
    ? (externalSetOpen as Dispatch<SetStateAction<boolean>>)
    : setOpen;

  const initialFocusRef = useRef(null);

  const onClose = useCallback(() => {
    if (!allowClose) return;

    setOpen(!open);
    onModalClose && onModalClose();
  }, [open, onModalClose, allowClose]);

  return (
    <Transition.Root show={open} as={Fragment} appear>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={initialFocusRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-8 sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "relative text-left",
                  "bg-white shadow-xl overflow-hidden rounded-4xl",
                  "p-0 my-8 sm:w-full",
                  "flex flex-col",
                  "transform transition-all",
                  {
                    "max-w-[480px] min-h-[240px]": size === "sm",
                    "max-w-[600px] min-h-[400px]": size === "md",
                    "max-w-[960px] h-[680px] min-h-[680px]": size === "lg",
                    "sm:w-fit": size === "fit",
                  },
                  className
                )}
              >
                {allowClose && showClose && (
                  <XLg
                    className="w-5 absolute -top-0 right-0 m-8 cursor-pointer"
                    onClick={onClose}
                  />
                )}
                {children({ close: () => onClose() })}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export const Modal = Object.assign(ModalRoot, {
  Title,
  Footer,
});
