<<<<<<< HEAD
import { SmallDevice } from '../Header/styledComponents';
import {MainHeading, MainContainer,FrontendImage,ContainerOne,ContainerTwo,IconsContainer,IconsMainConatiner,LargeDeviceContainer,SmallDeviceContainer } from './styledComponents'
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
=======

import {MainHeading, MainContainer,FrontendImage,ContainerOne,ContainerTwo,IconsContainer,IconsMainConatiner,LargeDeviceContainer } from './styledComponents'
import {AiFillGithub} from 'react-icons/ai'
>>>>>>> c09ce83 (Final Commit)
const Home = () =>{
    const style = { fontSize: "70px", color:'#ffffff' };
    return(
        <MainContainer id="homeSection">
<<<<<<< HEAD
            <SmallDeviceContainer>
            <ContainerOne>
                <MainHeading color="#ffffff">Hi, My name is Mani Charan Reddy Gade</MainHeading>
                <MainHeading color="#8c8a84">I am a Frontend Developer</MainHeading>
                <IconsMainConatiner>
                    
                <IconsContainer href="https://github.com/manicharan-12" target="_blank">
                <AiFillGithub style={style}/>
                </IconsContainer>
                </IconsMainConatiner>
                
            </ContainerOne>
            <ContainerTwo>
                <FrontendImage src="https://res.cloudinary.com/djovsq3xl/image/upload/v1686469165/programming-concept-illustration_114360-1351-removebg-preview_zpjqqj.png" alt="working"/>
            </ContainerTwo>
            </SmallDeviceContainer>
=======
>>>>>>> c09ce83 (Final Commit)
            
            <LargeDeviceContainer>
            <ContainerOne>
                <MainHeading color="#ffffff">Hi, My name is Mani Charan Reddy Gade</MainHeading>
                <MainHeading color="#8c8a84">I am a Frontend Developer</MainHeading>
                <IconsMainConatiner>
                    
                <IconsContainer href="https://github.com/manicharan-12" target="_blank">
                <AiFillGithub style={style}/>
                </IconsContainer>
                </IconsMainConatiner>
                
            </ContainerOne>
            <ContainerTwo>
                <FrontendImage src="https://res.cloudinary.com/djovsq3xl/image/upload/v1686469165/programming-concept-illustration_114360-1351-removebg-preview_zpjqqj.png" alt="working"/>
            </ContainerTwo>
            </LargeDeviceContainer>
        </MainContainer>
    )
}


export default Home
