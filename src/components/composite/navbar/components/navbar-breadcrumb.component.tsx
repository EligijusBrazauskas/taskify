import { Typography } from "@/components/base";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export const NavBarBreadcrumb = () => (
  <Breadcrumb>
    <BreadcrumbList className="gap-1 px-2 md:gap-2">
      <BreadcrumbItem className="@xl:flex hidden">
        <BreadcrumbLink asChild>
          <Button variant="breadcrumb" size="sm">
            <Typography>Home</Typography>
          </Button>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="@xl:flex hidden" />
      <BreadcrumbItem className="@lg:flex hidden">
        <BreadcrumbLink asChild>
          <Button variant="breadcrumb" size="sm">
            <Typography>Projects</Typography>
          </Button>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="@lg:flex hidden" />
      <BreadcrumbItem className="@sm:flex hidden">
        <BreadcrumbPage>
          <Button variant="breadcrumb" size="sm" disabled>
            <Typography>Project</Typography>
          </Button>
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
