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
            <svg className="rings rings-hero" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g></svg>
            <svg className="circle circle-hero" xmlns="http://www.w3.org/2000/svg" width="129" height="129"><circle cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)"/></svg>

        </header>
        

     );
}
 
export default Hero;