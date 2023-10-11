<template>
  <div class="experience-container ">
    <div class="container">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          navigation
          :space-between="0"
          class="experience-container__swiper"
      >
        <swiper-slide >
          <div class="experience-container__info">
            <div class="experience-container__info__uptitle">
              <p>What Our Customers Say</p>
            </div>
            <div class="experience-container__info__title">
              <h1>Over 35 years experience designing <br/> handmade kitchens</h1>
            </div>
            <div class="experience-container__info__subtitle">
              <div>
                Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.
              </div>
            </div>
            <div class="experience-container__info__author">
              <p>
                Jane, Dundee
              </p>
            </div>
            <div class="experience-container__info__btn">
              <custom-button :width="'419px'" text="Frequently Asked Questions"></custom-button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="experience-container__info">
            <div class="experience-container__info__uptitle">
              <p>What Our 1231231 Say</p>
            </div>
            <div class="experience-container__info__title">
              <h1>Over 35 years experience designing <br/> handmade kitchens</h1>
            </div>
            <div class="experience-container__info__subtitle">
              <p>
                Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.
              </p>
            </div>
            <div class="experience-container__info__author">
              <p>
                Jane, Dundee
              </p>
            </div>
            <div class="experience-container__info__btn">
              <custom-button :width="'419px'" text="Frequently Asked Questions"></custom-button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>

import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CustomButton from "@/components/CustomButton.vue";
const modules = [Navigation, Pagination, Scrollbar, A11y ];
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

</script>



<style  lang="less">
.experience-container{
  background: #EEEEEE 0% 0% no-repeat padding-box;
  height: 667px;
  width: 100%;
  padding-top: 117px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    .swiper-button-next, .swiper-button-prev{
      display: none;
    }
    .experience-container__info__title{
      margin-bottom: 40px;
    }
    .experience-container__info__btn{
      margin-top: -20px;
      padding-bottom: 60px;
      button{
        width: 228px !important;

      }
    }
  }

  .swiper-slide{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .experience-container__swiper{
    height: 366px;

    .experience-container__info{
      max-width: 600px;
      > * {
        text-align: center;
      }
      .experience-container__info__uptitle{
        height: 18px;
        letter-spacing: 3px;
        color: var(--main-color);
        text-transform: uppercase;
        opacity: 1;
        font-family: Roboto-Regular;
      }
      .experience-container__info__title{
        margin-top: 15px;
        border-bottom: 33px;
        height: 94px;
        letter-spacing: 0px;
        color: #222222;
        opacity: 1;
        font-family: Helvetica-Bold;
      }
      .experience-container__info__subtitle{
        letter-spacing: 0px;
        color: var(--gray-color);
        opacity: 1;
      }
      .experience-container__info__author{
        margin-top: 11px;
        letter-spacing: 0px;
        color: var(--gray-color);
        opacity: 1;
        margin-bottom: 36px;
      }
    }
  }
}
</style>
