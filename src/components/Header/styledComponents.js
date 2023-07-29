import styled from 'styled-components'
import { Link } from 'react-scroll';

export const NavContainer = styled.nav`
position: sticky;
top: 0;
-webkit-backdrop-filter: blur(8px);
backdrop-filter: ${props=>props.isBlur};
`

export const NavigatorLink=styled(Link)`
text-decoration:none;
cursor:pointer;
outline:none;
`

export const LogoImage = styled.img`
height:100px;
width:130px;
margin-left:8px;
`

export const ListItemsLg = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
align-items:center;
`
export const Items =styled(Link)`
color: #fff;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 0.15em;
display: inline-block;
padding: 15px 20px;
position: relative;
cursor:pointer;
outline:none;
&:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
&:hover{
    &:after {
        width: 100%; 
        left: 0;
      }
}
&:active{
    border-bottom: 3px solid #ffffff;
}

`

export const LargeDevice = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding-right:32px;

@media screen and (max-width:771px){
    display: none;
`

export const SmallDevice= styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
@media screen and (min-width:772px){
    display: none;
`