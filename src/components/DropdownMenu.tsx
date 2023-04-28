import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDown, Icon as IconType } from "react-bootstrap-icons";

interface DropdownItem {
  text: string;
  onClick: () => void;
  Icon?: IconType;
}

interface DropdownMenuProps {
  title?: string;
  items: DropdownItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title = "More actions",
  items,
}) => (
  <Menu as="div" className="relative inline-block text-center">
    <div>
      <Menu.Button className="inline-flex w-full justify-center items-center gap-2 rounded-xl border border-gray-900 text-primary px-4 py-2 text-sm font-medium font-header text-black">
        {title}
        <ChevronDown />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-body text-sm">
        <div className="px-1 py-1">
          {items.map(({ text, onClick, Icon }) => (
            <Menu.Item key={text}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-900 text-white" : "text-gray-900"
                  } group flex w-full items-center gap-1.5 rounded-xl px-2.5 py-2.5`}
                  onClick={onClick}
                >
                  {Icon && <Icon />}
                  {text}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default DropdownMenu;
