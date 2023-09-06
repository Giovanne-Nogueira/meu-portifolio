import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className = {styles.navbar}>
            <ul>
                <li><Nav.Link href='#apresentação'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#habilidades'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/giovanne_nogueira/' target="_blank"><FaInstagram size={35}/></a></li>
                <li><a href='https://github.com/Giovanne-Nogueira' target="_blank"><FaGithub size = {35}/></a></li>
                <li><a href='https://www.linkedin.com/in/giovanne-nogueira-de-sousa-brito-5894a4264/'target="_blank"><FaLinkedin size ={35}/></a></li>
            </ul>
        </div>
    )
}

export default Navbar