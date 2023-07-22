import styled from 'styled-components'

export const AboutContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:32px;
min-height:100vh;
`

export const ImageContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
width:40%;
@media screen and (max-width:771px){
    width:100%
    justify-content:center;
`

export const TextContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:60%;
@media screen and (max-width:771px){
    width:100%
`

export const MainTexts = styled.h1`
color:${props=>props.color};
text-align:center;
margin-bottom:22px;
font-size:18px;
font-family: Poppins, sans-serif;
    opacity: 1;
`
export const LargeDeviceContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
padding:24px;

@media screen and (max-width:771px){
    display: none;
`
export const SmallDeviceContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:24px;
min-height:100vh;

@media screen and (min-width:772px){
    display: none;
`