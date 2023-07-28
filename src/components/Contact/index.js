import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {HiPhone,HiMail} from 'react-icons/hi'
import './index.css'
const Contact = () =>{
return(
    <div className='contactme-container' id='contactSection'>
        <h1>CONTACT ME AT</h1>
        <div className='icons-container'>
            <a href='https://www.linkedin.com/in/gade-mani-charan-reddy/' target='_blank'><AiFillLinkedin className='icons linkedin'/></a>
            <a href='https://instagram.com/_manicharan_reddy_?igshid=MzNlNGNkZWQ4Mg==' target='_blank'><AiOutlineInstagram className='icons instagram'/></a>
        </div>
        <div className='info-container'>
            <HiMail className='info-icon'/>
            <a className='info' 
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gade.manicharan12@gmail.com"
            target="_blank">
                gade.manicharan12@gmail.com
            </a>
        </div>
        <div className='info-container'>
            <HiPhone className='info-icon'/>
            <a className='info' href="tel:7013680808" target="_blank">+91 70136 80808</a>
        </div>
        
    </div>
)
}

export default Contact
