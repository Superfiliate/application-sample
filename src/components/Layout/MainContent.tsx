import Breadcrumb, { BreadcrumbPage } from "components/Breadcrumb";

interface MainContentProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
  navigation?: BreadcrumbPage[];
  title?: string;
  overheadTitle?: string;
  border?: boolean;
}

export default function MainContent({
  children,
  navigation,
  title,
  overheadTitle,
  actions,
  border = false,
}: MainContentProps): JSX.Element {
  return (
    <main className="text-gray-900">
      <div className="py-10">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-16 pb-4">
          <div className="max-w-[1200px] w-full flex justify-between flex-wrap items-center">
            <div>
              {navigation && <Breadcrumb pages={navigation} />}
              {overheadTitle && (
                <span className="text-xs font-semibold font-display text-gray-700 mb-[6px]">
                  {overheadTitle.toUpperCase()}
                </span>
              )}
              {title && (
                <h1 className="text-3xl font-semibold text-gray-900 font-display">
                  {title}
                </h1>
              )}
            </div>

            <div className="z-10 mt-4 flex w-full justify-end sm:w-fit">
              {actions}
            </div>
          </div>
        </div>

        {border && <div className="border-b w-full"></div>}

        <div className="flex flex-col items-center px-4 sm:px-6 md:px-16 py-6">
          <div className="max-w-[1200px] w-full">{children}</div>
        </div>
      </div>
    </main>
  );
}
