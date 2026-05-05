import Slider from "react-slick";
import projectsData from "../../Database/projectsData";
import ProjectCard from "./ProjectCard";
import { ProjectContainer } from "../../Style/ProjectStyle/ProjectStyle";

const techIcons = [
  { label: "HTML", icon: "/SliderImage/html.svg" },
  { label: "CSS", icon: "/SliderImage/css.svg" },
  { label: "JavaScript", icon: "/SliderImage/javascript.svg" },
  { label: "TypeScript", icon: "/SliderImage/typescript.svg" },
  { label: "React", icon: "/SliderImage/react.svg" },
  { label: "Angular", icon: "/SliderImage/angular.svg" },
  { label: "C Sharp", icon: "/SliderImage/csharp.svg" },
  { label: ".NET", icon: "/SliderImage/dotnet.svg" },
  { label: "ASP.NET", icon: "/SliderImage/aspnet.svg" },
  { label: "Entity Framework", icon: "/SliderImage/entity-framework.svg" },
  { label: "REST API", icon: "/SliderImage/rest-api.svg" },
  { label: "JWT", icon: "/SliderImage/jwt.svg" },
  { label: "SQL Server", icon: "/SliderImage/sql-server.svg" },
  { label: "MongoDB", icon: "/SliderImage/mongodb.svg" },
  { label: "JSON", icon: "/SliderImage/json.svg" },
  { label: "Microservices", icon: "/SliderImage/microservices.svg" },
  { label: "SoapUI", icon: "/SliderImage/soapui.svg" },
  { label: "Git", icon: "/SliderImage/git.svg" },
  { label: "GitHub", icon: "/SliderImage/github.svg" },
  { label: "Azure DevOps", icon: "/SliderImage/azure-devops.svg" },
  { label: "VS Code", icon: "/SliderImage/vs-code.svg" },
  { label: "Visual Studio", icon: "/SliderImage/visual-studio.svg" },
];

export default function Project() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <ProjectContainer>
      <h1>Selected Projects</h1>
      <h3>
        A curated selection of projects where I focused on interfaces,
        interaction, APIs and practical product thinking.
      </h3>
      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            headline={project.headline}
            project={project.project}
            technologies={project.technologies}
            description={project.description}
            challenge={project.challenge}
            link={project.link}
            image={project.image}
            index={index}
          />
        ))}
      </div>
      <h4>Technologies I Use</h4>
      <Slider {...settings} className='slider'>
        {techIcons.map((technology) => (
          <div className='container' key={technology.label}>
            <img
              src={technology.icon}
              alt={`${technology.label} logo`}
              title={technology.label}
              loading='lazy'
              decoding='async'
            />
            <span className='tech-label'>{technology.label}</span>
          </div>
        ))}
      </Slider>
    </ProjectContainer>
  );
}
