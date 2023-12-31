import React from "react";
import HomeSlider from "@/components/homeComponents/homeSlider/HomeSlider";
import ExploreComponent from "@/components/homeComponents/exploreComponent/ExploreComponent";
import WelcomeNote from "@/components/homeComponents/welcomeNote/WelcomeNote";
import OfferedServices from "@/components/homeComponents/servicesComponent/OfferedServices";
import ReviewSlider from "@/components/homeComponents/reviewSlider/ReviewSlider";
import ElevateBusiness from "@/components/homeComponents/elevateBusiness/ElevateBusiness";

const cardContent = [
  {
    title: "The Matriach",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/the_matriach.png",
  },
  {
    title: "My e-assistant",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/e_assistant_manager.png",
  },
  {
    title: "Health Assesment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sollicitudin sem ac consectetur nulla volutpat libero tortor nam tristique.",
    buttonLabel: "Explore Service",
    imageLink: "/health_assesment.png",
  },
];

const heading = "Explore What We Have Done";

export default function index() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <ExploreComponent cardContent={cardContent} componentHeading={heading}>
        <></>
      </ExploreComponent>
      <WelcomeNote></WelcomeNote>
      <OfferedServices></OfferedServices>
      <ReviewSlider></ReviewSlider>
      <ElevateBusiness></ElevateBusiness>
    </div>
  );
}
