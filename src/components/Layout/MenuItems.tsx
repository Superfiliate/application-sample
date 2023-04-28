import { useIntegrationModal } from "components/IntegrationsModal";
import cn from "lib/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Gear,
  HouseDoor,
  Icon as IconType,
  Lightning,
  PlusLg,
  Search,
} from "react-bootstrap-icons";

const MenuItems: React.FC<React.PropsWithChildren<unknown>> = () => {
  const [_, setIntegrationModalOpen] = useIntegrationModal();

  return (
    <>
      <Link shallow href="/customers">
        <a className="bg-secondary rounded-[10px] flex text-white font-header font-medium text-xs justify-center p-2 items-center mx-2 mb-8">
          <Search className="mr-2" /> Search Superfiliates...
        </a>
      </Link>

      <MenuItem Icon={HouseDoor} href="/home">
        Home
      </MenuItem>

      <MenuSection>Programs</MenuSection>

      <ProgramItems />

      <MenuItem
        icon={<PlusLg className="text-lg mr-2" />}
        href="/programs/new"
        className="text-xs text-gray-200 justify-center font-medium font-header"
      >
        New program
      </MenuItem>

      <MenuSection>Management</MenuSection>

      <MenuItem
        Icon={Lightning}
        href={"?integrations=true"}
        onClick={() => setIntegrationModalOpen(true)}
      >
        Integrations
      </MenuItem>

      <MenuItem Icon={Gear} href="/settings">
        Settings
      </MenuItem>

      {/*
        <MenuItem Icon={QuestionCircle} href="/faq">
          FAQ
        </MenuItem>
      */}
    </>
  );
};

export default MenuItems;
