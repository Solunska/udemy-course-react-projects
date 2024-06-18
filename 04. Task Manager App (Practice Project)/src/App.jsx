import Aside from "./components/Aside";
import HomePage from "./components/HomePage";
import {useState} from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectDetails from "./components/ProjectDetails.jsx";

function App() {

    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(text) {
        setProjectsState(prevState => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                id: taskId,
                projectId: prevState.selectedProjectId
            };

            return {
                ...prevState,
                selectedProjectId: projectsState.selectedProjectId,
                tasks: [...prevState.tasks, newTask]
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id)
            };
        });
    }

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }


    function handleAddProject(projectData) {
        setProjectsState(prevState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    function handleCancel() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    function handleProjectOpen(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleDelete() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
            };
        });
    }

    const selectedProject = projectsState.projects.find(project => projectsState.selectedProjectId);

    return (
        <>
            <main className="h-screen my-8 flex gap-8">
                <Aside onClick={handleStartAddProject} projects={projectsState.projects}
                       onProjectOpen={handleProjectOpen} selectedProjectId={projectsState.selectedProjectId}/>
                {projectsState.selectedProjectId === undefined && <HomePage onClick={handleStartAddProject}/>}
                {projectsState.selectedProjectId === null &&
                    <ProjectForm onCancel={handleCancel} onAdd={handleAddProject}/>}
                {(projectsState.selectedProjectId !== null && projectsState.selectedProjectId !== undefined) &&
                    <ProjectDetails project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask}
                                    onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>}

            </main>
        </>
    );
}

export default App;
