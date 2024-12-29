import { MenuGroup } from "@/components/composite/shared/interfaces";
import {
  FolderKanban,
  Home,
  MessageSquare,
  Search,
  SquareUserRound,
  Tag,
} from "lucide-react";

export const navigationMenuDefaults: MenuGroup[] = [
  {
    label: "MAIN MENU",
    children: [
      {
        id: 1,
        label: "Home",
        icon: <Home />,
        path: "",
      },
      {
        id: 2,
        label: "Search",
        icon: <Search />,
        path: "",
      },
      {
        id: 3,
        label: "Projects",
        icon: <FolderKanban />,
        path: "projects",
      },
      {
        id: 4,
        label: "Tags",
        icon: <Tag />,
        path: "tags",
      },
      {
        id: 5,
        label: "Activity",
        icon: <SquareUserRound />,
        path: "activity",
      },
      {
        id: 6,
        label: "Comments",
        icon: <MessageSquare />,
        path: "comments",
      },
    ],
  },
];
