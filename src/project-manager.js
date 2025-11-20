import { TaskManager } from "./task-manager";

export function ProjectManager() {
    let projects = new Map();

    const addProject = (projectName) => {
        projects.set(projectName, TaskManager());
        return projects.get(projectName);
    }

    const addTaskFromData = (projectName, data) => {
        const taskManager = projects.get(projectName);
        return taskManager.addTask(data);
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

    const getProjectsAsObjects = () => {
        const m = new Map();
        for (const [project, taskManager] of projects) {
            m.set(project, taskManager.getTasksAsObjects());
        }
        return m;
    }

    const getDeleteMethod = (projectName) => {
        const taskManager = projects.get(projectName);
        return taskManager.deleteTask;
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
        getProjectsAsObjects,
        getDeleteMethod,
        addTaskFromData,
        deleteTask,
        buildFromObjects,
    }
}