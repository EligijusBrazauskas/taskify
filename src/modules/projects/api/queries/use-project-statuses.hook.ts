import { useQuery } from "@tanstack/react-query";
import { SuccessResponse } from "@/api/types";
import { projectStatuses } from "@/mocks";
import { Status } from "@/modules/_shared/interfaces";

//TODO: Remove after API is ready
const mockQueryFn = (mode = "resolve"): SuccessResponse<Status[]> => {
  return new Promise((resolve, reject) => {
    if (mode === "resolve") {
      resolve({ data: projectStatuses });
    }

    if (mode === "reject") {
      reject(new Error("Failed to fetch statuses"));
    }
  });
};

export const useProjectStatusesQuery = () => {
  //TODO: Implement real query function
  // const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["projectStatuses"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
