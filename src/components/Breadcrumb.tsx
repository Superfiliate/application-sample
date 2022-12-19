import cn from "lib/cn";
import Link from "next/link";

export interface BreadcrumbPage {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  pages: BreadcrumbPage[];
}

export default function Breadcrumb({ pages }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex flex-wrap items-center">
        {pages.map((page, index) => (
          <li
            key={`${page.href}-${index}`}
            className={cn(
              "font-display font-bold text-xs text-gray-700 uppercase",
              "last:basis-full last:text-3xl last:font-medium last:text-gray-900",
              "last:mt-2 last:normal-case"
            )}
          >
            <div className="flex items-center">
              <Link href={page.href}>{page.name}</Link>

              {index !== pages.length - 1 && (
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
