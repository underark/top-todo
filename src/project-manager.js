import { TaskManager } from "./task-manager";

export function ProjectManager() {
    let projects = new Map();

    const addProject = (projectName) => {
        projects.set(projectName, TaskManager());
        return projects.get(projectName);
    }

    const addTask = (projectName, title, description, dueDate, priority) => {
        const taskManager = projects.get(projectName);
        return taskManager.addTask(title, description, dueDate, priority);
    }

    const deleteTask = (projectName, id) => {
        const taskManager = projects.get(projectName);
        taskManager.deleteTask(id);
    }

    const getProjects = () => {
        const m = new Map();
        for (const [project, taskManager] of projects) {
            m.set(project, taskManager.getTasks());
        }
        return m;
    }

    const buildFromObjects = (projectsMap) => {
        for (const [project, tasks] of projectsMap) {
            const taskManager = addProject(project);
            taskManager.addTasksFromObject(tasks);
        }
    }

    return {
        addProject,
        getProjects,
        addTask,
        deleteTask,
        buildFromObjects,
    }
}