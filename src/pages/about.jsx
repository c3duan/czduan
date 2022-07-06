import React, { memo } from 'react';
import { Page } from '../containers';
import '../styles/pages/about.scss';

const About = memo(() => (
  <Page block="about">
    <h1 className="about__header">About Me</h1>
    <section className="about__content">
      <h2 className="about__subheader">Professional</h2>
      <ul className="about__text">
        <li className="about__line">Software Engineer @ Coinbase</li>
        <li className="about__line">Love building tools that give people easy access to resources and enable them to use their talent to impact the world positively</li>
        <li className="about__line">I am constantly learning in the fields of computer science, math, economics, and moral philosophy</li>
      </ul>
    </section>
    <section className="about__content">
      <h2 className="about__subheader">Personal</h2>
      <ul className="about__text">
        <li className="about__line">Forever an apprentice</li>
        <li className="about__line">Love contributing to open source projects and learning about blockchain and cryptography</li>
        <li className="about__line">Enjoy swimming, hiking, and playing basketball</li>
      </ul>
    </section>
  </Page>
));

export default About;