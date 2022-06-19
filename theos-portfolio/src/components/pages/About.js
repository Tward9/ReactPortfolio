import React from 'react';
import aboutme from '../../aboutmepic.png'

export default function About() {
  return (
    <div>
      <h3 id="aboutMe" className="p-2">About Me</h3>
    <section id="bio" className="d-flex justify-content-center">
      <figure className="figure p-2 w-25">
        <img id="aboutMeImg" src={aboutme} className="figure-img img-fluid rounded"
          alt="Me standing infront of the Golden Gate Bridge"/>
        <figcaption className="figure-caption text-end">Visiting the Golden Gate Bridge</figcaption>
      </figure>
      <section id="aboutMeParagraph" className="d-flex w-75 p-3 fs-4">
        <p>
          Hello, and welcome to my portfolio where I will be chronicling my journy from the world of mechanical
          engineering and physical products, to the world of software development. My name is Theo, and while I may be
          new to this for now, I can't wait to continue to sink my teeth into projects like building this portfolio!
        </p>
        <p>
          Below you can start to look through some of the things I've worked on wither by myself or with other group
          members from my bootcamp class. I plan to continuing coming back to this page to update the works listed
          below as my body of work grows and I gain new skills I can implement on these pages themselves.
        </p>
        <p>
          In my time outside of work and class, I'm an avid endurance athlete. I can regularly be found running or
          cycling along Chicago's lakefront and generally enjoying the outdoors. On top of that I love to play
          strategy games with my partner and friends. My top three right now are called <span
            className="ital">Gloomhaven</span>, <span className="ital">Scythe</span>, and <span className="ital">Betrayal at the
            House on the Hill</span>!
        </p>
      </section>
    </section>
    </div>
  );
}