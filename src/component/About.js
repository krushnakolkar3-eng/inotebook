import React from 'react';

const About = () => {
    return (
        <div className="nb-about-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600&display=swap');

                .nb-about-page {
                    font-family: 'Inter', sans-serif;
                    background: #FDFCF8;
                    min-height: calc(100vh - 56px);
                    padding: 64px 24px;
                }

                .nb-about-wrap {
                    max-width: 760px;
                    margin: 0 auto;
                }

                .nb-about-eyebrow {
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #C0392B;
                    margin-bottom: 12px;
                }

                .nb-about-wrap h1 {
                    font-family: 'Caveat', cursive;
                    font-size: 56px;
                    color: #1B1F3B;
                    margin: 0 0 24px 0;
                    line-height: 1.05;
                }

                .nb-about-lead {
                    font-size: 18px;
                    line-height: 1.7;
                    color: #374151;
                    margin-bottom: 48px;
                    max-width: 620px;
                }

                .nb-features {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 28px;
                    margin-bottom: 56px;
                }

                .nb-feature {
                    border-left: 3px solid #1B1F3B;
                    padding-left: 18px;
                }

                .nb-feature h3 {
                    font-size: 16px;
                    font-weight: 600;
                    color: #1B1F3B;
                    margin: 0 0 8px 0;
                }

                .nb-feature p {
                    font-size: 14px;
                    line-height: 1.6;
                    color: #6B7280;
                    margin: 0;
                }

                .nb-about-quote {
                    position: relative;
                    background: #1B1F3B;
                    border-radius: 10px;
                    padding: 40px 44px;
                    color: #FDFCF8;
                    overflow: hidden;
                }

                .nb-about-quote::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(#2A2F55 1px, transparent 1px);
                    background-size: 100% 32px;
                    opacity: 0.6;
                }

                .nb-about-quote p {
                    position: relative;
                    font-family: 'Caveat', cursive;
                    font-size: 30px;
                    line-height: 1.35;
                    margin: 0;
                    max-width: 520px;
                }

                .nb-about-quote span {
                    position: relative;
                    display: block;
                    margin-top: 16px;
                    font-family: 'Inter', sans-serif;
                    font-size: 13px;
                    color: #9BA3D1;
                }

                @media (max-width: 720px) {
                    .nb-features {
                        grid-template-columns: 1fr;
                    }
                    .nb-about-wrap h1 {
                        font-size: 42px;
                    }
                }
            `}</style>

            <div className="nb-about-wrap">
                <div className="nb-about-eyebrow">About iNotebook</div>
                <h1>A quiet place to keep your thoughts.</h1>
                <p className="nb-about-lead">
                    iNotebook is a simple, private note-taking app. No clutter, no distractions —
                    just a fast way to write things down, tag them, and find them again later.
                    Every note is tied to your account, so it's yours alone.
                </p>

                <div className="nb-features">
                    <div className="nb-feature">
                        <h3>Private by default</h3>
                        <p>Your notes are only ever visible to you, secured behind your own login.</p>
                    </div>
                    <div className="nb-feature">
                        <h3>Organized with tags</h3>
                        <p>Group notes by topic — Work, Personal, or whatever fits how you think.</p>
                    </div>
                    <div className="nb-feature">
                        <h3>Fast to use</h3>
                        <p>Add, edit, or delete a note in seconds. No friction between you and the page.</p>
                    </div>
                </div>

                <div className="nb-about-quote">
                    <p>"The palest ink is better than the best memory."</p>
                    <span>— Why iNotebook exists</span>
                </div>
            </div>
        </div>
    );
};

export default About;