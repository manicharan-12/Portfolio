import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import './index.css'
const Contact = () =>{
return(
    <div className='contact-container' id='contactSection'>
        <h1>CONTACT ME AT</h1>
        <div className='icons-container'>
            <a href='https://www.linkedin.com/in/gade-mani-charan-reddy/' target='_blank'><AiFillLinkedin className='icons linkedin'/></a>
            <a href='https://instagram.com/_manicharan_reddy_?igshid=MzNlNGNkZWQ4Mg==' target='_blank'><AiOutlineInstagram className='icons instagram'/></a>
        </div>
        
    </div>
)
}

export default Contact
