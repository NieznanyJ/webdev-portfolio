import Nav from "./Nav";

const Hero = () => {

    return ( 
        <header className="hero" id="hero">
            
            <div className="profile-img">
            <Nav/>
            </div>

            <div className="hero-text">
                <h1 className="hero-title">Nice to meet you! I’m <span>Adam Keyes</span>.</h1>
                <p className="hero-para">Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <a href="#contact-form" className="hero-contact">CONTACT ME</a>
            </div>
            <div className="shapes">
            <div className="circle"></div>
            <div className="ovals">
                <div className="oval-ring oval-ring1"></div>
                <div className="oval-ring oval-ring2"></div>
                <div className="oval-ring oval-ring3"></div>
                <div className="oval-ring oval-ring4"></div>
                <div className="oval-ring oval-ring5"></div>
            </div>
            </div>

        </header>
        

     );
}
 
export default Hero;