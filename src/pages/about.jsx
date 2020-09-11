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
        <li className="about__line">A fourth year Computer Science student from the University of California, San Diego.</li>
        <li className="about__line">I am always fine-tuning my applications for better impact, performance and user experience.</li>
        <li className="about__line">I love expanding my skills and learning new technologies such as gRPC, Ruby on Rails, Golang, GraphQL, and AWS.</li>
      </ul>
    </section>
    <section className="about__content">
      <h2 className="about__subheader">Personal</h2>
      <ul className="about__text">
        <li className="about__line">I enjoy contributing to open source projects and working on cool project ideas with my friends.</li>
        <li className="about__line">When I'm not coding, I enjoy swimming, hiking, watching anime, and playing League of Legends with my friends.</li>
        <li className="about__line">I finished my Software Engineer internship at Coinbase this summer, and I had a wonderful remote Cryptern experience! <img className="about__icon" src={Coinbase} alt="logo"/></li>
        <li className="about__line">Have I mentioned I really like animals? Especially dogs. <span className="about__emoji" role="img" aria-label="dog">🐕</span></li>
      </ul>
    </section>
  </Page>
));

export default About;