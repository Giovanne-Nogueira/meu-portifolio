import styles from '../section/Projects.module.css'
import Card from './Card'
import lpdc from '../section/images/Projects/lpdnc.svg'
import port from '../section/images/Projects/port.svg'
import ButtonB from '../elements/ButtonB'


function Projects(){
    return(
        <div className={styles.project} id="projects">
            <h1>Projects</h1>
            <Card
                img={lpdc}
                title="LP - DNC"
                tech="HTML, CSS E JS"
                description="Projeto Front-End para realizar uma landing-page da Escola DNC." 
                repo='https://github.com/Giovanne-Nogueira/LP-DNC'
                site="https://lucent-sfogliatella-aeacff.netlify.app"
            />
            <Card
                 img={port}
                 title="LP - ARQUITETURA"
                 tech="HTML, CSS "
                 description="Projeto Front-End para realizar uma landing-page de uma empresa de arquitetura fictícia." 
                 repo='https://github.com/Giovanne-Nogueira/PROJETOLParquitetura'
                 site="https://landingparq.netlify.app/"
            />
            <section>
                 <ButtonB
                text='Acesse o reposiótio completo'
            />
            </section>
           
           
        </div>
    )
}

export default Projects