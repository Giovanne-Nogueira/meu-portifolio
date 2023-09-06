import style from './Skills.module.css'
import javascript from './images/skills/js.svg'
import react from './images/skills/react.svg'
import css from './images/skills/css.svg'
import html from './images/skills/html.svg'

function Skills(){
    return(
        <div className={style.skill} id='habilidades'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills