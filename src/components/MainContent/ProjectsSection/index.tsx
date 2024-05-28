import { ProjectCard } from "./ProjectCard";
import "./projectsSection.scss";
import react from "../../../assets/SkillIcons/reactIcon.svg";
import javascript from "../../../assets/SkillIcons/jsIcon.svg";
import KenzieHub from "../../../assets/ProjetoKenzieHub.png";
import { useEffect, useState } from "react";
import React from "react";

export const ProjectsSection = () => {
  const [position, setPosition] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [projectCards, setProjectCards] = useState([
    <ProjectCard
      projectImg={KenzieHub}
      projectName={"KenzieHub"}
      projectSkills={[react, javascript]}
      projectLink={"#"}
      Animation={true}
      key={crypto.randomUUID()}
      projectDescription={
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, delectus! Consequatur commodi et maiores explicabo officia quam, porro tempora. Magnam, nobis labore officia, omnis in unde totam adipisci aut ipsam culpa laborum voluptatum laudantium fugiat enim voluptatibus fuga tempora consectetur, necessitatibus praesentium recusandae ducimus porro iste nulla saepe? Aspernatur iste mollitia perferendis veritatis libero debitis illum culpa recusandae doloremque voluptates nobis velit magnam cupiditate quisquam praesentium soluta dolor rerum distinctio voluptatum, sit molestias, ea assumenda! Quod, quam non ipsum sequi dignissimos, totam expedita odio quisquam facilis ipsam magni molestiae sapiente distinctio eaque placeat nesciunt? Quae debitis cum magnam recusandae illum!"
      }
    />,
    <ProjectCard
      projectImg={KenzieHub}
      projectName={"OtherProject"}
      projectSkills={[react, javascript]}
      projectLink={"#"}
      Animation={false}
      key={crypto.randomUUID()}
      projectDescription={
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam quisquam, doloribus accusamus deserunt saepe adipisci quis, recusandae iure odit nemo similique, commodi illum nihil. Reprehenderit aliquid accusamus quisquam iure?"
      }
    />,
  ]);

  const nextSlide = () => {
    setPosition((prevPosition) => prevPosition + 1);

    // let newArr = []
    // for (let i = 0;i < projectCards.length;i++) {
    //   if (i === position) {
    //     const curItem = React.cloneElement(projectCards[i], {
    //       Animation: false
    //     })
    //     const nextItem = React.cloneElement(projectCards[i+1], {
    //       Animation: true
    //     })
    //     newArr = [curItem, nextItem]
    //     setProjectCards(newArr)
    //     console.log(newArr)
    //     break
    //   }
      
    // }
    // Update the current card's Animation prop to false and clone elements with new props
    const updatedCards = projectCards.map((card, index) =>
      React.cloneElement(card, {
        Animation: index === position ? false : true,
      })
    );

    // Update the state with the new project cards
    setProjectCards(updatedCards);
    
  };

  const prevSlide = () => {
    setPosition((prevPosition) => {
      if (prevPosition -1 < 0) {
        
        return projectCards.length - 1
      }else {
        return prevPosition - 1;
      }
    });

    const updatedCards = projectCards.map((card, index) =>
      React.cloneElement(card, {
        Animation: index === position ? false : true,
      })
    );

    // Update the state with the new project cards
    setProjectCards(updatedCards);
  };

  return (
    <section className="projects__content">
      <h1 className="highlight__font">Projects</h1>

      <ul className="project__list">
        {projectCards[position % projectCards.length]}

        <div className="project__navigation">
          <button onClick={prevSlide} className="slide__prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-caret-left"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
            </svg>
          </button>
          <button onClick={nextSlide} className="slide__next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
            </svg>
          </button>
        </div>
      </ul>
    </section>
  );
};
