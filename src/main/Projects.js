import { useMediaQuery } from "react-responsive";
import React, { useState } from 'react';

const Projects = () => {

    const [size, setSize] = useState(1440);

    const largeScreen = useMediaQuery({ minWidth: size  });

    const smallerScreen = useMediaQuery({maxWidth: size});


    return (
        <div className="projects">
            <div className="projects-header">
                <h2 className="subtitle">Projects</h2>
                <a href="#contact-form" className="hero-contact">CONTACT ME</a>

            </div>

            <div className="projects-gallery">
                <div className="project-card">
                    <div className="project-img project-img1" >
                        {largeScreen && <div className="view" >
                            <a href="#hero"  className="hero-contact view-project">view project</a>
                            <a href="#hero"  className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">DESIGN PORTFOLIO</h3>
                    <div className="tools">
                        <p className="project-tool ">html</p>
                        <p className="project-tool ">css</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="#" className="hero-contact view-project">view project</a>
                            <a href="#" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
                <div className="project-card">
                    <div className="project-img project-img2">
                    {largeScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">E-LEARNING LANDING PAGE</h3>
                    <div className="tools">
                        <p className="project-tool">html</p>
                        <p className="project-tool">css</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
                <div className="project-card">
                    <div className="project-img project-img3">
                    {largeScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">TODO WEB APP</h3>
                    <div className="tools">
                        <p className="project-tool">html</p>
                        <p className="project-tool">css</p>
                        <p className="project-tool">javascript</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
                <div className="project-card">
                    <div className="project-img project-img4">
                    {largeScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">ENTERTAINMENT WEB APP</h3>
                    <div className="tools">
                        <p className="project-tool">html</p>
                        <p className="project-tool">css</p>
                        <p className="project-tool">javascript</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
                <div className="project-card">
                    <div className="project-img project-img5">
                    {largeScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">MEMORY GAME</h3>
                    <div className="tools">
                        <p className="project-tool">html</p>
                        <p className="project-tool">css</p>
                        <p className="project-tool">javascript</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
                <div className="project-card">
                    <div className="project-img project-img6">
                    {largeScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                    </div>
                    <h3 className="project-card-title">ART GALLERY SHOWCASE</h3>
                    <div className="tools">
                        <p className="project-tool">html</p>
                        <p className="project-tool">css</p>
                        <p className="project-tool">javascript</p>
                    </div>
                    {smallerScreen && <div className="view">
                            <a href="" className="hero-contact view-project">view project</a>
                            <a href="" className="hero-contact view-project">view code</a>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default Projects
