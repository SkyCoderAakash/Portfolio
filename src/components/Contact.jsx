import React from "react";

const Contact = ()=>{
    return (
        <div className="contact" id="contact">
            <div className='heading'>
                <h1 align="center">Contact</h1>
                <p align="center">Feel free to react out to me for any question or opportunity </p>
            </div>
            <div className="form">
                <div className="wrepper">
                    <h1>Email me!</h1>
                    <form action="https://formspree.io/f/mvoeolqq" method="POST">
                        <div>
                            <input type="email" name="email" autoComplete="off" placeholder="Your Email" required />
                        </div>
                        <div>
                            <input type="text" name="name" autoComplete="off" placeholder="Your Name" required />
                        </div>
                        <div>
                            <input type="text" name="subject" autoComplete="off" placeholder="Subject" required />
                        </div>
                        <div>
                            <input type="text" name="message" autoComplete="off" placeholder="Message" required />
                        </div>
                        <button className="">Submit</button>
                    </form>
                </div>
            </div>
        </div>         
    )
};

export default Contact;