import {NavContainer,LogoImage,NavigatorLink,ListItemsLg,Items,LargeDevice,SmallDevice} from './styledComponents'
import { slide as Menu } from 'react-burger-menu'
import { Component } from 'react'
import { Slant as Hamburger } from 'hamburger-react'

class Header extends Component{   
    
    state={
        isScrolled:false
    }
    changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            this.setState({isScrolled:true})
        }
        else {
            this.setState({isScrolled:false})
        }
    }   
    render(){         
        const {isScrolled}=this.state  
        const blurBg=  isScrolled ? 'blur(8px)': 'none'
        return(
            <NavContainer isBlur={blurBg} onScroll={this.changeNavbarColor()}>
                <LargeDevice>
                <NavigatorLink to="homeSection" spy={true} smooth={true} duration={900} activeClass="active">
                <LogoImage src="https://res.cloudinary.com/djovsq3xl/image/upload/v1686470517/letter-mc-logo-design-typography-mc-design_219523-184-removebg-preview_fjjzzf.png" alt="logo"/>
                </NavigatorLink>
                <ListItemsLg>
                    <Items to="homeSection" spy={true} smooth={true} duration={900} activeClass="active">Home</Items>
                    <Items to="aboutSection" spy={true} smooth={true} duration={900} activeClass="active">About Me</Items>
                    <Items to="projectSection" spy={true} smooth={true} duration={900} activeClass="active">Projects</Items>
                    <Items to="contactSection" spy={true} smooth={true} duration={900} activeClass="active">Contact Me</Items>
                </ListItemsLg>    
                </LargeDevice>
                {/* <SmallDevice>
                <NavigatorLink to="homeSection" spy={true} smooth={true} duration={500} activeClass="active">
                <LogoImage src="https://res.cloudinary.com/djovsq3xl/image/upload/v1686470517/letter-mc-logo-design-typography-mc-design_219523-184-removebg-preview_fjjzzf.png" alt="logo"/>
                </NavigatorLink>
                
                
                </SmallDevice> */}
                
            </NavContainer>
        )
    }
    
}



export default Header
