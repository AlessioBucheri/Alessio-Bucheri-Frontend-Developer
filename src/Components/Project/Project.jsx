import Slider from "react-slick";
import projectsData from "../../Database/projectsData";
import ProjectCard from "./ProjectCard";
import { ProjectContainer } from "../../Style/ProjectStyle/ProjectStyle";

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
        <div className='container'>
          <img src='/SliderImage/html.png' alt='HTML logo' />
        </div>
        <div className='container'>
          <img src='/SliderImage/css-3.png' alt='CSS logo' />
        </div>
        <div className='container'>
          <img src='/SliderImage/java-script.png' alt='Javascript logo' />
        </div>
        <div className='container'>
          <img src='/SliderImage/typescript.png' alt='Typescript logo' />
        </div>
        <div className='container'>
          <img src='/SliderImage/github.png' alt='Github logo' />
        </div>
        <div className='container'>
          <img src='/SliderImage/atom.png' alt='React logo' />
        </div>
      </Slider>
    </ProjectContainer>
  );
}
