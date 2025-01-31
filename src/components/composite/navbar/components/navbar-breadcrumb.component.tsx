import { useBreadcrumbs } from "@/components/composite/navbar/hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export const NavBarBreadcrumb = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map(({ pathname, label }, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={pathname} className="first-letter:uppercase">
                  {label}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-secondary last:hidden">
              /
            </BreadcrumbSeparator>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
