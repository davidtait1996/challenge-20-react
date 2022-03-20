import React from "react";

function Projects(props) {
  // const { currentCategory } = props;

  const projectsArr = [
    {
      title: "Weather Dashboard",
      deploy: "https://davidtait1996.github.io/challenge-6-server-side-APIs/",
      github: "https://github.com/davidtait1996/challenge-6-server-side-APIs",
      image: "weather-dashboard",
    },
    {
      title: "Planet Express",
      deploy: "https://planet-express-js.herokuapp.com/",
      github: "https://github.com/davidtait1996/planet-express-js",
      image: "planet-express",
    },
    {
      title: "Employee Organization Chart",
      deploy: "https://github.com/davidtait1996/challenge-10-OOP",
      github: "https://github.com/davidtait1996/challenge-10-OOP",
      image: "employee-chart",
    },
    {
      title: "Employee Organization Chart",
      deploy: "https://github.com/davidtait1996/challenge-10-OOP",
      github: "https://github.com/davidtait1996/challenge-10-OOP",
      image: "employee-chart",
    },
    {
      title: "Employee Organization Chart",
      deploy: "https://github.com/davidtait1996/challenge-10-OOP",
      github: "https://github.com/davidtait1996/challenge-10-OOP",
      image: "employee-chart",
    },
    {
      title: "Employee Organization Chart",
      deploy: "https://github.com/davidtait1996/challenge-10-OOP",
      github: "https://github.com/davidtait1996/challenge-10-OOP",
      image: "employee-chart",
    }
  ];

  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
      {projectsArr.map((project) => (
        <div className="container d-flex flex-wrap justify-content-center my-5">
          <img
            src={require(`../../assets/images/${project.image}.png`)}
            alt={project.title}
            className="image"
            key={project.title}
          />
          <div className="overlay">
            <div className="text-stuff">
              <a href={project.github}>
                <h5 className="card-title text-center">{project.title}</h5>
              </a>
              <a href={project.deploy}>
                <h5 className="card-title text-center">Link to deployment</h5>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;
