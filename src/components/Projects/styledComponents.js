import styled from 'styled-components'

export const ProjectContainer = styled.div`
width:95%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height:100vh;
`

export const ProjectCard = styled.div`
border: 2px solid #ffffff;
padding:24px;
border-radius:12px;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
width:100%;
margin-bottom:15px;
@media screen and (max-width:771px){
    display:flex;
    flex-direction:column;
`

export const ProjectDetails = styled.div`
dispaly:flex;
flex-direction:column;
width:60%;
@media screen and (max-width:771px){
    width:100%;
`

export const ProjectDetails2 = styled.div`
dispaly:flex;
flex-direction:column;
width:60%;
order:2;
@media screen and (max-width:771px){
    width:100%;
`

export const ProjectHeading = styled.h1`
color:#ffffff;
margin-bottom:12px;
`

export const ProjectSummary = styled.p`
color:#ffffff;
margin-bottom:12px;
font-size:15px;
`

export const ImageContainer = styled.div`
display:inline;
`

export const ImageContainer2 = styled.div`
display:inline;
order:1;
`

export const ProjectImage = styled.img`
width:80%;


`
export const CardContainer = styled.div`
width:80%;
@media screen and (max-width:771px){
    width:100%;
`

export const ProjectLink = styled.a`
text-decoration:none;
color:#8c8a84;
font-style:italic;
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