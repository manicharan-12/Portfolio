import styled from 'styled-components'


const NotFoundContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
`
const MainHeading = styled.h1`
color:#ffffff;
text-align:center;
`

const NotFound = () =>{

    return(
        <NotFoundContainer>
            <img src="https://o.remove.bg/downloads/e03476d6-3c98-4e82-88af-d11af63bf866/340546-removebg-preview.png" alt="not found"/>
            <MainHeading>Wrong Path! Please check the path.</MainHeading>
        </NotFoundContainer>
    )
}

export default NotFound