import styled from 'styled-components'

export const MainContainer = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
`

export const MainHeading = styled.h1`
color:${props=>props.color};
text-align:center;
`
export const FrontendImage = styled.img`

    width:100%

`

export const ContainerOne = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ContainerTwo=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const IconsContainer = styled.a`
text-decoration:none;
`
export const IconsMainConatiner = styled.div``

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