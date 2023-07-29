import {NavContainer,LogoImage,NavigatorLink,ListItemsLg,Items,LargeDevice,SmallDevice} from './styledComponents'

import { Component } from 'react'
import logo from './logo.png'

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
                <LogoImage src={logo} alt="logo"/>
                </NavigatorLink>
                <ListItemsLg>
                    <Items to="homeSection" spy={true} smooth={true} duration={900} activeClass="active">Home</Items>
                    <Items to="aboutSection" spy={true} smooth={true} duration={900} activeClass="active">About Me</Items>
                    <Items to="projectSection" spy={true} smooth={true} duration={900} activeClass="active">Projects</Items>
                    <Items to="contactSection" spy={true} smooth={true} duration={900} activeClass="active">Contact Me</Items>
                </ListItemsLg>    
                </LargeDevice>
                
            </NavContainer>
        )
    }
    
}



export default Header
