<template>
  <div class="swiper-container">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="slide in slides" :key="slide">
        <div :style="getBackgroundStyle(slide)" class="swiper-container__slide">
          <div class="container">
            <div class="swiper-container__header">
              <div class="swiper-container__header__social-media">
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram"/></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter"/></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f"/></a>
              </div>
              <div class="swiper-container__header__navigation">
                <router-link to="{}">SHOP</router-link>
                <router-link to="{}">PLAN MY KITCHEN</router-link>
              </div>
              <div class="swiper-container__header__logo">
                <img alt="logo" src="../assets/logo.png"/>
              </div>
              <div class="swiper-container__header__navigation">
                <router-link to="{}">ABOUT US</router-link>
                <router-link to="{}">GALLERY</router-link>
              </div>
              <div class="swiper-container__header__basket">
                <button>MY ORDER <font-awesome-icon icon="cart-shopping" /></button>
              </div>
            </div>
            <div class="mobile-menu"  >
              <burger-menu>
                <router-link to="/">Home</router-link>
                <router-link to="/about">About Us</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <div class="swiper-container__header__mobile-basket">
                  <button>MY ORDER <font-awesome-icon icon="cart-shopping" /></button>
                </div>
              </burger-menu>
              <div class="swiper-container__mobile__header__logo">
                <img alt="logo" src="../assets/logo.png"/>
              </div>
            </div>

            <div class="swiper-container__divider"></div>
            <div class="swiper-container__info">
              <div class="swiper-container__info__subtitle">
                <p>Design and order your new kitchen online today</p>
              </div>
              <div class="swiper-container__info__title">
                <h1>Bespoke & made to measure <br/> handmade kitchen design</h1>
              </div>
              <div class="swiper-container__info__order-now">
                <custom-button text="Order Now"></custom-button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import CustomButton from "@/components/CustomButton.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
export default {
  components: {
    CustomButton,
    Swiper,
    SwiperSlide,
    BurgerMenu
  },
  setup() {
    const slides = ref(['Bitmap.png', 'Bitmap.png', 'Bitmap.png']);

    const getBackgroundStyle = (slide) => {
      const imageUrl = require(`../assets/${slide}`);
      return {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '900px',
      };
    };

    return {
      slides,
      getBackgroundStyle,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  max-height: 900px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-height: auto;
  }
  .swiper-container__slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 900px;
  }

  .container {


    .swiper-container__header {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding-top: 30px;
      height: 50px;

      > * {
        padding: 5px;
        text-decoration: none;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      .swiper-container__header__social-media {
        display: flex;
        padding-left: 13px;
        > * {
          padding: 5px;
          text-decoration: none;
          color: white;
          cursor: pointer;
        }
      }

      .swiper-container__header__navigation {
        > * {
          font-family: Roboto-Regular;
          padding: 5px;
          height: 13px;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 3px;
          text-align: center;
          color: #FFFFFF;
          text-transform: uppercase;
          opacity: 1;

          &:nth-child(2) {
            margin-left: 20px;
          }
        }
      }
      .swiper-container__header__basket {
        button {
          width: 192px;
          height: 50px;
          font-family: Roboto-Regular;
          border: 1px solid #FFFFFF;
          border-radius: 25px;
          opacity: 1;
          background: none;
          color: #FFFFFF;
          text-align: center;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-top: -10px;
          cursor: pointer;
          &:hover {
            background: #FFFFFF;
            color: #000000;
          }
        }
      }
      .swiper-container__header__logo {
        img {
          width: 83px;
          height: 32px;
        }
      }

    }

    .swiper-container__header__mobile-basket{
      button {
        width: 192px;
        height: 50px;
        font-family: Roboto-Regular;
        border: 1px solid #FFFFFF;
        border-radius: 25px;
        opacity: 1;
        background: none;
        color: #FFFFFF;
        text-align: center;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
          background: #FFFFFF;
          color: #000000;
        }
      }
    }
    .mobile-menu {
      display: none;
      padding: 20px;
      color: white;
    }
    .swiper-container__mobile__header__logo{
      margin-top: -20px;
      img{
        height: 30px;
      }
    }

    @media (max-width: 768px) {
      .swiper-container__header, .swiper-container__divider {
        display: none;
      }
      .mobile-menu {
        display: block;
      }

    }
    .swiper-container__divider {
      width: 100%;
      margin-top: 31px;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      opacity: 0.3;
    }

    .swiper-container__info {
      padding-top: 244px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .swiper-container__info__subtitle {
        text-align: center;
        letter-spacing: 3px;
        color: #FFFFFF;
        text-shadow: 0px 0px 4px #000000;
        text-transform: uppercase;
        opacity: 1;
        font-family: Roboto-Regular;
      }

      .swiper-container__info__title {
        text-align: center;
        letter-spacing: -1px;
        color: #FFFFFF;
        text-shadow: 0px 0px 25px #00000080;
        opacity: 1;
        font-family: Helvetica-Bold;
        h1 {
          margin: 0;
        }
      }

      .swiper-container__info__order-now {
        margin-top: 30px;
      }
    }
  }

}


</style>
