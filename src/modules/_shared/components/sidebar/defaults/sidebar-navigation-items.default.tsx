import { FolderKanban, Search, SquareUserRound, Ticket } from "lucide-react";
import { MenuItem } from "@/modules/_shared/components/sidebar/interfaces";

export const sidebarNavigationItems: MenuItem[] = [
  {
    id: 1,
    type: "button",
    label: "Search",
    icon: <Search size={18} />,
    onClick: () => console.log("search"),
  },
  {
    id: 2,
    type: "link",
    label: "Projects",
    icon: <FolderKanban size={18} />,
    to: {
      to: "/projects",
    },
  },
  {
    id: 3,
    type: "link",
    label: "Tasks",
    icon: <Ticket size={18} />,
    to: {
      to: "/tasks",
    },
  },
  // {
  //   id: 4,
  //   type: "link",
  //   label: "Tags",
  //   icon: <Tag />,
  // },
  {
    id: 5,
    type: "link",
    label: "Activity",
    icon: <SquareUserRound size={18} />,
  },
  // {
  //   id: 6,
  //   type: "link",
  //   label: "Comments",
  //   icon: <MessageSquare />,
  // },
];
