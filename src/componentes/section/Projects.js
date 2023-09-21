import styles from '../section/Projects.module.css'
import Card from './Card'
import lpdc from '../section/images/Projects/lpdnc.svg'
import port from '../section/images/Projects/Port-dnc.jpg'
import ButtonB from '../elements/ButtonB'
import ccxp from '../section/images/Projects/CCXPimg.png'


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
                 img={ccxp}
                 title="COUNTDOWN"
                 tech="HTML, CSS, JS "
                 description="Projeto Front-End para realizar um countdown do evento CCXP2022." 
                 repo='https://github.com/Giovanne-Nogueira/ProjetoCCXP2022'
                 site='https://projeto-ccxp-2022-kappa.vercel.app/'
            />
            <Card
                 img={port}
                 title="PORTIFÓLIO"
                 tech="HTML, CSS,  JS, REACT "
                 description="Projeto Front-End para realizar um portifólio dinâmico." 
                 repo='https://github.com/Giovanne-Nogueira/meu-portifolio'
                 site=''
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