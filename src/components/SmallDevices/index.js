import styled from 'styled-components'


const SmallDeviceContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
padding:24px;
min-height:100vh;
@media screen and (min-width:772px){
    display: none;
`

const Image=styled.img`
width:80%;
`

const Paragraph=styled.p`
color:#ffffff;
text-align:center;
font-weight:bolder;
`

const SmallDevices=()=>{
return(
    <SmallDeviceContainer>
        <Image src="https://res.cloudinary.com/djovsq3xl/image/upload/v1686113523/giphy-unscreen_1_online-video-cutter.com_fkuyet.gif" alt="working"/>
        <Paragraph>This is website is Under Developent for small devices. Use large devices to experience the website.</Paragraph>
    </SmallDeviceContainer>
)
}

export default SmallDevices