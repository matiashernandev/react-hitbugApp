import React from "react";

export default function TestNesCss() {
    return (
        <div>
            {" "}
            <h1>Testeo NES.css (CDN INDEX)</h1>
            <section className="icon-list">
                {/* twitter */}
                <i className="nes-icon twitter is-large"></i>
                {/* facebook */}
                <i className="nes-icon facebook is-large"></i>
                {/* instagram */}
                <i className="nes-icon instagram is-large"></i>
                {/* github */}
                <i className="nes-icon github is-large"></i>
                {/* google */}
                <i className="nes-icon google is-large"></i>
                {/* gmail */}
                <i className="nes-icon gmail is-large"></i>
                {/* medium */}
                <i className="nes-icon medium is-large"></i>
                {/* linkedin */}
                <i className="nes-icon linkedin is-large"></i>
                {/* twitch */}
                <i className="nes-icon twitch is-large"></i>
                {/* youtube */}
                <i className="nes-icon youtube is-large"></i>
                {/* reddit */}
                <i className="nes-icon reddit is-large"></i>
                {/* whatsapp */}
                <i className="nes-icon whatsapp is-large"></i>
            </section>
            <section className="icon-list">
                <i className="nes-mario"></i>
                <i className="nes-ash"></i>
                <i className="nes-pokeball"></i>
                <i className="nes-bulbasaur"></i>
                <i className="nes-charmander"></i>
                <i className="nes-squirtle"></i>
                <i className="nes-kirby"></i>
            </section>
            <div className="nes-container with-title is-centered">
                <p className="title">Container.is-centered</p>
                <h1>PROBLEMITAS CON BOOTSTRAP(?</h1>
            </div>
            <div className="nes-container is-dark with-title">
                <p className="title">Container.is-dark</p>
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <div className="nes-container is-rounded">
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
            <div className="nes-container is-rounded is-dark">
                <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
            </div>
        </div>
    );
}
