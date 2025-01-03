import { Typography } from "@/components/base";
import { mapBreadcrumbs } from "@/components/composite/navbar/helpers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

export const NavBarBreadcrumb = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");

  return (
    <Breadcrumb>
      <BreadcrumbList className="px-2">
        {mapBreadcrumbs(pathSegments, pathname).map((breadcrumb, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator className="first:hidden" />
            <BreadcrumbItem>
              <Link
                to={breadcrumb?.path}
                disabled={pathname === breadcrumb?.path}
              >
                <BreadcrumbLink asChild>
                  <Button
                    variant="outline"
                    disabled={pathname === breadcrumb?.path}
                  >
                    <Typography className="first-letter:uppercase">
                      {breadcrumb?.label}
                    </Typography>
                  </Button>
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
