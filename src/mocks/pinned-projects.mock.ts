import { MenuItemRecord } from "@/components/composite/sidebar/interfaces";

export interface MockPinnedProjectsResponse {
  data: MenuItemRecord[];
}

export const mockPinnedProjectsData: MockPinnedProjectsResponse = {
  data: [
    {
      id: 1,
      label: "Projektas",
    },
    {
      id: 2,
      label: "Projektas 2",
    },
    {
      id: 3,
      label: "Projektas 3",
    },
  ],
};
