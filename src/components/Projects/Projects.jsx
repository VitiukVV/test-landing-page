import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { Container, SectionStyled } from 'components/helpers/styled';

const Projects = () => {
  return (
    <SectionStyled>
      <Container>
        <h2>Our Projects</h2>
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://vnv.solutions/img/learnitlive.png"
              alt="project"
            />
            <h3>Web-Service</h3>
            <p>
              Lernitlive - webservice for coaches and experts where they can
              teach online. In easy words - it is a marketplace with some more
              functionality to pass courses and take classes. You can look
              throug the courses, choose your coach, according to his rate and
              reviews. Functionality: you can register,buy classes, chat with
              your coach and leave reviews.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://vnv.solutions/img/iren.png"
              alt="project"
            />

            <h3>Delivery Service</h3>
            <p>
              Iren Banquet Hall - Delivery service for tasty food from Iren. You
              can register, order and pay not leaving the website!
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              loading="lazy"
              src="https://vnv.solutions/img/volstiny_production.png"
              alt="project"
            />
            <h3>Marketplace</h3>
            <p>
              Volstiny production - Marketplace for a Designers agency. Powerful
              and creative website for powerfull creators. Unique design, a lot
              of animations and internal marketplace - website is faster than a
              Forest Gump and ready for a SEO ad campaigns.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </SectionStyled>
  );
};

export default Projects;
