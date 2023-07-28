import {BsDownload} from 'react-icons/bs'

import './index.css'
import ResumePdf from '../resume.pdf'


const Resume = () =>{
    return(
            <div className='resume-conatiner'>
                <h1 className='resume-heading'>Download my Resume here:</h1>
                <button className='button-ele'>
                    <a className="resume-anchor" 
                    href={ResumePdf} download="Mani Charan Resume" 
                    target="_blank" 
                    rel="noreferrer"
                    >Download <BsDownload className='icon-download'/>
                    </a>
                    
                </button>
            </div>
    )
}

export default Resume
