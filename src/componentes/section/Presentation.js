import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import { useEffect, useState } from 'react'

function Presentation(){
    const [text,setText] = useState('');
    const toRotate = ['Giovanne Nogueira', 'Desenvolvedor Full-Stack'];
    const [loop,setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(() =>{
        let ticker = setInterval(() => {
            toType()
        }, delta);
        return() => {clearInterval(ticker)}
    },[text])

    const toType = ()=>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }

    }

    return(
        <div className={styles.Presentation} id='Presentation'>
            <h3><strong>Bem-vindo ao meu Portifólio</strong></h3>
            <h1>Olá, eu sou {text}</h1>
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