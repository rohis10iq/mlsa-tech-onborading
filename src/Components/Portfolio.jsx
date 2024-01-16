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
import image from "../images/code.jpg";

const imageAltText = "computer code";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "This is my Personal Website 🎉",
    description:
      "My first Article published",
    url: "https://medium.com/@leorohi10/introduction-to-front-end-development-what-when-where-to-learn-ab2cd51d43e9",
  },
  {
    title: "My Portfolio Website",
    description:
      "Check out My Portfolio Website",
    url: "https://rohis10iq.github.io/codsoft-project_3/",
  },
  {
    title: "My LinkedIn Profile",
    description:
      "Check out what I've been upto on LinkedIn",
    url: "https://www.linkedin.com/in/rohis10iq/",
  },
  {
    title: "Calculator Project",
    description:
      "Check out this cool and simple calculator project",
    url: "https://rohis10iq.github.io/codsoft-project_1/",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
