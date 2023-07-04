import Nav from "../hero/Nav";

const Footer = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    const inputs = document.querySelectorAll('.input');

    const handleInput = (e) =>{
        const errorMsgs = document.querySelectorAll('.error-msg');
        
        console.log(e.target);
        
         inputs.forEach((input,index)=>{
            if (e.target.classList.contains('invalid') && e.target.classList.contains('input-email')){
                e.target.classList.remove('invalid');   
                errorMsgs[1].textContent = '';
            }
            else if (e.target.classList.contains('invalid') && e.target.classList.contains('input-name')){
                e.target.classList.remove('invalid');   
                errorMsgs[0].textContent = '';
            }
        }) 
    }

    const handleSubmit = (e) =>{
        const inputs = document.querySelectorAll('.input');
        const errorMsgs = document.querySelectorAll('.error-msg');

        inputs.forEach((input, index) => {
            if (input.classList.contains('input-email') && !emailRegex.test(input.value)  && input.value){
                e.preventDefault();
                input.classList.add('invalid');
                errorMsgs[index].textContent = 'Sorry, invalid format here';
            }
            else if (input.classList.contains('input-name') && !nameRegex.test(input.value) && input.value) {
                e.preventDefault();
                input.classList.add('invalid');
                errorMsgs[index].textContent = 'Sorry, invalid format here';
            }
            
          });
    }

    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <h2 className="subtitle">Contact</h2>
                <p className="footer-para hero-para">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                <form id="contact-form" className="contact-form" action="/" method="GET" onSubmit={handleSubmit} noValidate>
                    <div className="input-div">
                    <input onChange={handleInput} className="input input-name" type="text" name="name" id="name" placeholder="name" />
                    <span className="error-msg"></span>
                    </div>
                    <div className="input-div">
                    <input onInput={handleInput} className="input input-email" type="text" name="email" id="email" placeholder="email" />
                    <span className="error-msg"></span>
                    </div>
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="message"></textarea>
                    <button type="submit" className="btn hero-contact">SEND MESSAGE</button>
                </form>
                <div className="shapes">

                    <div className="ovals ovals-footer">
                        <div className="oval-ring-footer oval-ring1-footer"></div>
                        <div className="oval-ring-footer oval-ring2-footer"></div>
                        <div className="oval-ring-footer oval-ring3-footer"></div>
                        <div className="oval-ring-footer oval-ring4-footer"></div>
                        <div className="oval-ring-footer oval-ring5-footer"></div>
                    </div>
                </div>
                <div className="footer-nav">
                    <Nav></Nav>
                </div>
            </div>

        </footer>
    );
}

export default Footer;