import React, { memo } from 'react';
import { Page } from '../containers';
import { Coinbase } from '../assets';
import '../styles/pages/about.scss';

const About = memo(() => (
  <Page block="about">
    <h1 className="about__header">About Me</h1>
    <section className="about__content">
      <h2 className="about__subheader">Professional</h2>
      <ul className="about__text">
        <li className="about__line">A third year Computer Science student at the University of California, San Diego.</li>
        <li className="about__line">Adventuring into Full-Stack Development, Operating System, and Machine Learning, where I'm currently learning to fine-tune my applications for better impact, performance and user experience.</li>
        <li className="about__line">In the future, I hope to expand my skills into more backend related technologies such as AWS and Sparks.</li>
      </ul>
    </section>
    <section className="about__content">
      <h2 className="about__subheader">Personal</h2>
      <ul className="about__text">
        <li className="about__line">I enjoy using and sharing my skills through contributing to open source projects and working on cool startup ideas with my friends.</li>
        <li className="about__line">When I'm not coding, I enjoy rock swimming, hiking, and playing League of Legends with my friends.</li>
        <li className="about__line">By the way, I am super excited for my internship at Coinbase for summer 2020! <img className="about__icon" src={Coinbase} alt="logo"/></li>
        <li className="about__line">Have I mentioned I really like animals? Especially dogs. <span className="about__emoji" role="img" aria-label="dog">🐕</span></li>
      </ul>
    </section>
  </Page>
));

export default About;