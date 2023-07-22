import {
    ProjectContainer,
    ProjectCard,
    CardContainer,
    ProjectDetails,
    ProjectDetails2,
    ProjectHeading,
    ProjectSummary,
    ImageContainer,
    ImageContainer2,
    ProjectLink,
    ProjectImage,
    LargeDeviceContainer,
    SmallDeviceContainer
} from './styledComponents'
import {CiShare1} from 'react-icons/ci'


const Projects = ()=>{
    return(
        <ProjectContainer id="projectSection">
            <SmallDeviceContainer>
            <CardContainer>
            <ProjectCard>
                <ImageContainer order="1">
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="Jobby App"/>
                </ImageContainer>
                <ProjectDetails order="2">
                    <ProjectHeading>
                        Nxt Watch
                    </ProjectHeading>
                    <ProjectSummary>
                    Built the Nxt Watch application, modelled after YouTube, enabling users to log in, explore video categories
such as Trending and Gaming, access saved videos, and search for specific content while adjusting the interface
theme.
                    </ProjectSummary>
                    <ProjectLink href="https://mcnxtwatch.ccbp.tech/" target='_blank'>Nxt Watch <CiShare1/></ProjectLink>
                </ProjectDetails>
            </ProjectCard>
            <ProjectCard>
                <ProjectDetails2>
                    <ProjectHeading>
                        Jobby App
                    </ProjectHeading>
                    <ProjectSummary>
                    Developed a comprehensive job search solution, Jobby App, using React.js. Designed pages for Login, Home, Jobs, and Job item details with React components and form inputs.
                    Secured user data with JWT tokens, REST API calls, and local storage. Implemented protected routes and persisted login state with React Router and local storage.
                    </ProjectSummary>
                    <ProjectLink href="https://mcjobbyapp.ccbp.tech/" target='_blank'>Jobby App <CiShare1/></ProjectLink>
                </ProjectDetails2>
                <ImageContainer2>
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="Jobby App"/>
                </ImageContainer2>
            </ProjectCard>
            <ProjectCard>
            <ImageContainer order="1">
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="Nxt Trendz"/>
                </ImageContainer>
                <ProjectDetails order="2">
                    <ProjectHeading>
                        Nxt Trendz
                    </ProjectHeading>
                    <ProjectSummary>
                    Project is to implement Nxt Trendz, an e-commerce platform inspired by Amazon and Flipkart. I have developed cutting-edge features such as login, product pages, and product details. I used React Router, React components, form inputs, and event handlers to build these pages. I also enabled secure authentication and authorization with JWT tokens and REST API calls.
                    </ProjectSummary>
                    <ProjectLink href="https://mcnxtrendz.ccbp.tech/" target='_blank'>Nxt Trendz <CiShare1/></ProjectLink>
                </ProjectDetails>
            </ProjectCard>
            </CardContainer>
            </SmallDeviceContainer>
            
            <LargeDeviceContainer>
            <CardContainer>
            <ProjectCard>
                <ImageContainer>
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="Jobby App"/>
                </ImageContainer>
                <ProjectDetails>
                    <ProjectHeading>
                        Nxt Watch
                    </ProjectHeading>
                    <ProjectSummary>
                    Built the Nxt Watch application, modelled after YouTube, enabling users to log in, explore video categories
such as Trending and Gaming, access saved videos, and search for specific content while adjusting the interface
theme.
                    </ProjectSummary>
                    <ProjectLink href="https://mcnxtwatch.ccbp.tech/" target='_blank'>Nxt Watch <CiShare1/></ProjectLink>
                </ProjectDetails>
            </ProjectCard>
            <ProjectCard>
                <ProjectDetails>
                    <ProjectHeading>
                        Jobby App
                    </ProjectHeading>
                    <ProjectSummary>
                    Developed a comprehensive job search solution, Jobby App, using React.js. Designed pages for Login, Home, Jobs, and Job item details with React components and form inputs.
                    Secured user data with JWT tokens, REST API calls, and local storage. Implemented protected routes and persisted login state with React Router and local storage.
                    </ProjectSummary>
                    <ProjectLink href="https://mcjobbyapp.ccbp.tech/" target='_blank'>Jobby App <CiShare1/></ProjectLink>
                </ProjectDetails>
                <ImageContainer>
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="Jobby App"/>
                </ImageContainer>
            </ProjectCard>
            <ProjectCard>
            <ImageContainer>
                    <ProjectImage src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="Nxt Trendz"/>
                </ImageContainer>
                <ProjectDetails>
                    <ProjectHeading>
                        Nxt Trendz
                    </ProjectHeading>
                    <ProjectSummary>
                    Project is to implement Nxt Trendz, an e-commerce platform inspired by Amazon and Flipkart. I have developed cutting-edge features such as login, product pages, and product details. I used React Router, React components, form inputs, and event handlers to build these pages. I also enabled secure authentication and authorization with JWT tokens and REST API calls.
                    </ProjectSummary>
                    <ProjectLink href="https://mcnxtrendz.ccbp.tech/" target='_blank'>Nxt Trendz <CiShare1/></ProjectLink>
                </ProjectDetails>
            </ProjectCard>
            </CardContainer>
            </LargeDeviceContainer>
        </ProjectContainer>

    )
}

export default Projects
