import { useQuery } from "@tanstack/react-query";
import { taskAttachments } from "@/mocks";
import { SuccessResponse } from "@/modules/_shared/api/types";
import { TaskAttachment } from "@/modules/tasks/interfaces";

export const useTaskAttachmentsQuery = () => {
  //TODO: Remove after API is ready
  const mockQueryFn = (mode = "resolve"): SuccessResponse<TaskAttachment[]> => {
    return new Promise((resolve, reject) => {
      if (mode === "resolve") {
        resolve({ data: taskAttachments });
      }

      if (mode === "reject") {
        reject(new Error("Failed to fetch attachments"));
      }
    });
  };

  //TODO: Implement real query function
  // const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["taskAttachments"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
