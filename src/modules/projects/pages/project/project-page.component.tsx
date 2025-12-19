import { Plus } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { Filters } from "@/modules/_shared/components/filters";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import {
  projectActions,
  projectBreadcrumbs,
} from "@/modules/_shared/components/navbar/defaults";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import { useProjectsSuspenseQuery } from "@/modules/projects/api/queries";
import {
  Content,
  PageHeader,
} from "@/modules/projects/pages/project/components";
import { useTasksSuspenseQuery } from "@/modules/tasks/api/queries";
import { TaskModal } from "@/modules/tasks/components/task-modal";
import { Route } from "@/routes/projects/$projectId";

export const ProjectPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
  const { toast } = useToast();
  const navigate = Route.useNavigate();
  const { taskId } = Route.useSearch();
  const { projectId } = Route.useParams();
  const {
    data: { data: tasks },
    isSuccess,
  } = useTasksSuspenseQuery();
  const task = tasks.find(
    (task) => task.id === taskId && String(task.projectId) === projectId,
  );

  //TODO: must be a better way to get a project title for breadcrumb (but maybe cache helpes here)
  const {
    data: { data: projects },
  } = useProjectsSuspenseQuery();

  const project = projects.find((project) => String(project.id) === projectId);

  useEffect(() => {
    if (isSuccess && taskId && !task) {
      navigate({
        search: (previous) => ({ ...previous, taskId: undefined }),
      });

      toast({
        title: "Task could not be found in this project",
      });
    }
  }, [task, taskId, toast, navigate, isSuccess]);

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      navigate({
        search: (previous) => ({ ...previous, taskId: undefined }),
      });
    }
  };

  return (
    <Flex className="h-full w-full flex-col overflow-hidden">
      <NavBar
        BreadCrumbs={
          <NavBarBreadcrumbs
            breadcrumbs={projectBreadcrumbs(
              project?.title ?? "Project",
              projectId,
            )}
          />
        }
        Actions={<NavBarActions actions={projectActions} />}
      />
      <Divider orientation="horizontal" />
      <PageHeader />
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters
          Action={
            isMd && (
              <Button>
                <Plus />
                {is3Xl && <Typography>New Task</Typography>}
              </Button>
            )
          }
        />
        <Dialog open={!!task} onOpenChange={handleOnOpenChange}>
          <Content tasks={tasks} />
          <TaskModal task={task} />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
