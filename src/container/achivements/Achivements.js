import { achievements } from "../Data";
import './achivements.css'
import { Swiper, SwiperSlide }  from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import AchievementDetail from "./AchivementsDetail";

const Achievements = () => (
  <div id="achievements">
    <div className="achivement_title">
        <div className="achivement_title_bar"/>
          <h1>Achievements</h1>
    </div>
  <div className="achivement_content">
  <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
          {achievements.map((achievement) => (
                <SwiperSlide>
                    <AchievementDetail achievement={achievement} />  
              </SwiperSlide>
          ))}
          <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
          </div>
      </Swiper>
      </div>
    </div>
    );
export default Achievements;