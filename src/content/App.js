import React, { useState } from 'react';
import image1 from "../public/Group.png"
import image2 from "../public/arrow.png"
import image3 from "../public/instagram-image.png"
import './App.css';

function App() {
    return (
        <div className={"content"}>
            <div className={"content_header"}>
                <h2>Contact Me</h2>
            </div>
            <div className={"content_text"}>
                <h1>
                    Let me know if you want to talk<br/>
                    about a potential collaboration.<br/>
                    I'm available for freelance work.
                </h1>
                <h2>
                    <a href="mailto:infoname@mail.com" className={"content_text-url"}>infoname@mail.com</a>
                </h2>
            </div>
            <div className={"content_inputs"}>
                <input type="name" placeholder="What's your name?"/>
                <input type="email" placeholder="Your email" />
                <input type="text" placeholder="Tell me about your project"/>
            </div>
            <div className={"content_buttons"}>
                <button className={"content_buttons-mainButton"}>Get a Quote</button>
                <div className={"content_buttons-rightButtons"}>
                    <img src={image1} className="content_buttons-rightButtons-buttons" alt="logo" />
                    <img src={image2} className="content_buttons-rightButtons-buttons" alt="logo" />
                </div>
            </div>
            <div className={"content_footer"}>
                <h1>Let's be Friends</h1>
                <div className={"content_footer_images"}>
                    <img src={image3} className="content_footer_images-image" alt="logo"/>
                    <img src={image3} className="content_footer_images-image" alt="logo"/>
                    <img src={image3} className="content_footer_images-image" alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export default App;