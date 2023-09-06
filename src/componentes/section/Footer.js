import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import style from '../section/Footer.module.css'

function Footer(){
    return(
        <div className={style.footerr}>
            <ul>
                <li><a href='https://www.instagram.com/giovanne_nogueira/' target="_blank"><FaInstagram size={35}/></a></li>
                <li><a href='https://github.com/Giovanne-Nogueira' target="_blank"><FaGithub size = {35}/></a></li>
                <li><a href='https://www.linkedin.com/in/giovanne-nogueira-de-sousa-brito-5894a4264/'target="_blank"><FaLinkedin size ={35}/></a></li>
            </ul>
            <p>giovnne1@gmail.com</p>
            <p>Giovanne Nogueira © 2023</p>

        </div>
    )
}

export default  Footer