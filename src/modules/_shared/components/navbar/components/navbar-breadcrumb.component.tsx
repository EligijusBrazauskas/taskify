import { Link } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Breadcrumb as IBreadcrumb } from "@/modules/_shared/components/navbar/interfaces";

interface NavBarBreadcrumbProps {
  breadcrumbs: IBreadcrumb[];
}

export const NavBarBreadcrumbs = ({ breadcrumbs }: NavBarBreadcrumbProps) => (
  <Breadcrumb>
    <BreadcrumbList>
      {breadcrumbs.map(({ to, label }, index) => (
        <Fragment key={index}>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={to?.to} className="first-letter:uppercase">
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
