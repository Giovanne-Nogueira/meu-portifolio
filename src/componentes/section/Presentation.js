import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation(){
    return(
        <div className={styles.Presentation} id='Presentation'>
            <h3><strong>Bem-vindo ao meu Portifólio</strong></h3>
            <h1>Olá, eu sou Giovanne Nogueira</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como desenvolvedor Jr, tenho vontade de resolver problemas<br/>
                complexos e trazer resultados excepcionais para os negócios.<br/>
                Com expectativa de crescimento da minha carreira e no meu<br/>
                conhecimento na área da tecnologia.
            </p>
            <ButtonA link='https://github.com/Giovanne-Nogueira' text='Conecte-se comigo!'/>
            
        </div>
    )
}

export default Presentation