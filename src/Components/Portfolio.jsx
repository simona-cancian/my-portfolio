/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coding-laptop.jpg";

const imageAltText = "desktop with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Discord Bot",
    description:
      "Baki's Discord Bot is a multi-functional bot that provides a variety of features for your Discord server. Gandalf - The DJ's Discord Bot is a specialized bot designed for playing music in your Discord server.",
    url: "https://github.com/simona-cancian/discord-bots",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Integer a purus vitae ante dapibus rhoncus. Nam nec ligula eu leo fermentum placerat eget nec ipsum.",
    url: "",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum nisi nec nulla consectetur, vitae fermentum eros finibus. ",
    url: "",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Maecenas ut ex id nisi posuere pretium. Sed id ipsum et nunc eleifend ultricies non sit amet nisi.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
