import { Dialog, Transition } from "@headlessui/react";
import { Button } from "common-ui";
import cn from "lib/cn";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, ClockHistory } from "react-bootstrap-icons";

interface SuccessModalProps {
  show: boolean;
  programId?: string;
}

export default function SuccessModal({ show, programId }: SuccessModalProps) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          /**/
        }}
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-8 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  "w-full max-w-[480px] transform overflow-hidden rounded-4xl",
                  "bg-white px-10 pt-14 pb-8 text-left align-middle shadow-xl transition-all"
                )}
              >
                <ClockHistory
                  color="#FB9F14"
                  className="w-16 h-16 mx-auto mb-6"
                />

                <Dialog.Title
                  as="h3"
                  className="text-xl text-center font-medium font-display leading-7"
                >
                  Your program is created and submitted to review!
                </Dialog.Title>

                <div className="mt-2 text-center font-body">
                  <p className="text-sm text-gray-600">
                    We are reviewing your program settings and it will be
                    available soon. In the meantime, let's enable the
                    experiences your customers will interact with!
                  </p>
                </div>

                <div className="mt-14 flex justify-center">
                  <Link
                    shallow
                    href={{
                      pathname: "/programs/[id]/experiences",
                      query: { id: programId },
                    }}
                  >
                    <Button icon={ArrowRight} iconPosition="right">
                      Let's go!
                    </Button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
