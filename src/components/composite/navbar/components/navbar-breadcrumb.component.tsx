import { mapBreadcrumbs } from "@/components/composite/navbar/helpers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export const NavBarBreadcrumb = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {mapBreadcrumbs(pathSegments, pathname).map((breadcrumb, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator className="text-secondary first:hidden">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={breadcrumb?.path}>{breadcrumb?.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
