import React from "react";
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
  };

  return (
    <ProjectContainer>
      <h1>Project Page</h1>
      <h3>These are some of the projects I have worked on</h3>
      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            index={index}
          />
        ))}
      </div>
      <h4>Technologies used</h4>
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
