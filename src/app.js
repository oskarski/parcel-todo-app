import { listTasks } from "./api/tasks";
import { renderTaskList } from "./tasks/task-list";
import { handleTaskCreate } from "./tasks/task-create";

listTasks().then((tasks) => {
  renderTaskList(tasks);
});

handleTaskCreate();
