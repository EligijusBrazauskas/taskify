import { MenuGroup } from "@/components/composite/shared/interfaces";
import {
  FolderKanban,
  Home,
  MessageSquare,
  Search,
  SquareUserRound,
  Tag,
} from "lucide-react";

export const sidebarMenuDefaults: MenuGroup[] = [
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
        label: "Tags",
        icon: <Tag />,
        path: "/tags",
      },
      {
        id: 5,
        type: "link",
        label: "Activity",
        icon: <SquareUserRound />,
        path: "/activity",
      },
      {
        id: 6,
        type: "link",
        label: "Comments",
        icon: <MessageSquare />,
        path: "/comments",
      },
    ],
  },
];
