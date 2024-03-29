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
                        {/* <ProjectCard 
                            title={"SCM - Stock Control Manager"} 
                            description={"Sistema para gerência de estoque"} 
                            imgSrc={"/sales.png"} 
                            link=""
                        /> */}
                        
                        <ProjectCard 
                            title={"FinHelper"} 
                            description={"Aplicativo para auxílio de finanças pessoais"} 
                            imgSrc={"/FinHelper.png"} 
                            link="projects/finhelper"
                        />
                    </div>
                </div>
            </section>

        </>
    );
}