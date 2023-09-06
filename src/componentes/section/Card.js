import style from './Card.module.css'
import ButtonB from '../elements/ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={style.Card}>
            <a href={site} target="_blank">
                <img src={img} alt='ERROR'/>
            </a>
            
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
}

export default Card