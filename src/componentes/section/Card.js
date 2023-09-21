import style from './Card.module.css'
import ButtonB from '../elements/ButtonB'
import {useState} from 'react'

function Card({img, title, tech, description, repo, site}){
    const [info, setInfo] = useState(false)

    function setInfoOn(){
        setInfo(true)
    }
    function setInfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={setInfoOff} className={style.Card}>
            <a  onMouseEnter={setInfoOn} href={site} target="_blank">
                <img src={img} alt='ERROR'/>
            </a>
            
            {info === true &&(
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>
            )}
            
        </div>
    )
}

export default Card