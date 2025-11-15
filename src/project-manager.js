export function ProjectManager() {
    let projects = new Map();

    const addProject = (projectName) => {
        projects.set(projectName, []);
    }

    const getProjects = () => {
        return structuredClone(projects);
    }

    return {
        addProject,
        getProjects,
    }
}