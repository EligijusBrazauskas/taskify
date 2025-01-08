import { MenuGroup } from "@/components/composite/sidebar/interfaces";
import {
  FolderKanban,
  Home,
  MessageSquare,
  Search,
  SquareUserRound,
  Tag,
  Ticket,
} from "lucide-react";

export const sidebarNavigationDefaults: MenuGroup[] = [
  {
    label: "MAIN MENU",
    children: [
      {
        id: 1,
        type: "link",
        label: "Home",
        icon: <Home />,
        path: "/",
      },
      {
        id: 2,
        type: "button",
        label: "Search",
        icon: <Search />,
        onClick: () => console.log("search"),
      },
      {
        id: 3,
        type: "link",
        label: "Projects",
        icon: <FolderKanban />,
        path: "/projects",
      },
      {
        id: 4,
        type: "link",
        label: "Tasks",
        icon: <Ticket />,
        path: "/tasks",
      },
      {
        id: 5,
        type: "link",
        label: "Tags",
        icon: <Tag />,
        path: "/tags",
      },
      {
        id: 6,
        type: "link",
        label: "Activity",
        icon: <SquareUserRound />,
        path: "/activity",
      },
      {
        id: 7,
        type: "link",
        label: "Comments",
        icon: <MessageSquare />,
        path: "/comments",
      },
    ],
  },
];
