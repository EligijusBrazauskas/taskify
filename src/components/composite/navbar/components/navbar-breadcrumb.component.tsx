import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

const linkStyles = "text-text-light hover:cursor-pointer";

export const NavBarBreadcrumb = () => (
  <Breadcrumb>
    <BreadcrumbList className="px-2 gap-2 sm:gap-2 text-sm">
      <BreadcrumbItem>
        <BreadcrumbLink className={linkStyles}>Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash className="text-text-light" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink className={linkStyles}>Projects</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash className="text-text-light" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage className="text-secondary">Project</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);
