import { Title } from "./Title";

import stylesProjects from '../styles/components/Projects.module.css';
import stylesProjectCard from '../styles/components/ProjectCard.module.css';
import { ProjectCard } from "./ProjectCard";

export function Projects() {
    return (
        <>
            <Title text={'Projetos'} id={'projectTitle'}/>
            <section id="projects" className={`section row ${stylesProjectCard.circle}`}>
                {/* <h1 className="font-zero">Projetos</h1> */}
                <div className={`content ${stylesProjectCard.content}`}>
                    <div className={`container ${stylesProjectCard.container}`}>
                        <ProjectCard title={"Project Title"} description={"Project Description"} imgSrc={"/java.svg"} />
                        <ProjectCard title={"Project Title"} description={"Project Description"} imgSrc={"/java.svg"} />
                        <ProjectCard title={"Project Title"} description={"Project Description"} imgSrc={"/java.svg"} />
                    </div>
                </div>
            </section>

        </>
    );
}