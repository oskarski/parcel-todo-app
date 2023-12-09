export const renderTaskList = (tasks) => {
  const $taskList = document.getElementById("task-list");

  $taskList.innerHTML = "";

  for (const task of tasks) {
    $taskList.innerHTML += `
            <li class="p-5 border flex items-center">${task.title}</li>
        `;
  }
};
