import React from 'react';
import aboutme from '../../aboutmepic.png'

export default function About() {
  return (
    <div className='relativeAbout'>
      {/* eslint-disable-next-line */}
      <h3 id="aboutMe" className="p-2"></h3>
      <section id="bio" className="d-flex justify-content-center">
        <figure className="figure p-2 w-25">
          <img id="aboutMeImg" src={aboutme} className="figure-img img-fluid rounded"
            alt="Me standing infront of the Golden Gate Bridge" />
          <figcaption className="figure-caption text-end">Visiting the Golden Gate Bridge</figcaption>
        </figure>
        <section id="aboutMeParagraph" className="d-flex w-50 p-3 fs-4 flex-wrap">
          <p>
            Hello, and welcome to my portfolio where I will be chronicling my journy from the world of mechanical
            engineering and physical products, to the world of software development. My name is Theo, and while I may be
            new to this for now, I can't wait to continue to sink my teeth into projects like building this portfolio!
          </p>
          <p>
            Please look through some of the things I've worked on in the projects Tab! It contains a selection of my work I am curently the most proud of. My favorite right now is the Platters and Pantries app. It lets you search for ingredients or types of food and gives recipe suggestions. You can add these to your personal pantry and grocery lists to keep track of things you need to get from the store.
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