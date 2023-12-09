import { createTask, listTasks } from "../api/tasks";
import { renderTaskList } from "./task-list";

export const handleTaskCreate = () => {
  const $taskCreateForm = document.getElementById("task-create-form");

  $taskCreateForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title");

    createTask({ title }).then(() => {
      $taskCreateForm.reset();

      listTasks().then(renderTaskList);
    });
  });
};
