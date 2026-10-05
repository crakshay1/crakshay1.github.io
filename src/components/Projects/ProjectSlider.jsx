import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Projects.css"

import ProjectCard from "./ProjectCard";

export default function ProjectSlider({
    emoji,
    title,
    description,
    projects,
    }) {
    if (projects.length === 0) {
        return null;
    }

    return (
        <section className="project-slider">
        <div className="project-slider-header">
            <div style={{display: "flex", justifyContent: "flex-start"}}> 
                <p style={{fontSize: "1.4vmin", marginLeft:"5%"}}>{emoji}</p>
                <h2 style={{fontSize: "1.5vmin", textDecoration: "underline", marginLeft: "3%"}}>{title}</h2>
            </div>
            <p style={{color: "white",fontSize: "1.2vmin", textAlign: "center", marginTop: "-2%"}}><i>{description}</i></p>
        </div>

        <Swiper
            modules={[Autoplay, Pagination, Mousewheel]}
            navigation
            mousewheel
            grabCursor
            spaceBetween={20}
            slidesPerView="1"
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {projects.map((project) => (
            <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
            </SwiperSlide>
            ))}
        </Swiper>
        </section>
    );
}