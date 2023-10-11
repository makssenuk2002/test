<template>
  <div class="footer-container">
    <div class="container">
      <div class="footer-container__logo">
        <div class="footer-container__logo__divider"></div>
        <div class="footer-container__logo__logo"> <img src="../assets/logo.png"/></div>
        <div class="footer-container__logo__divider"></div>
      </div>
      <div class="footer-container__about">
        <div class="footer-container__about__item">
          <h3>About</h3>
           <div class="footer-container__about__links">
             <router-link to="{}">Shop</router-link>
             <router-link to="{}">Plan My Kitchen</router-link>
             <router-link to="{}">About Us</router-link>
             <router-link to="{}">Gallery</router-link>
           </div>
        </div>
        <div class="footer-container__about__item">
          <h3>Service</h3>
           <div class="footer-container__about__links">
             <router-link to="{}">FAQ</router-link>
             <router-link to="{}">Contact</router-link>
             <router-link to="{}">How to Buy</router-link>
             <router-link to="{}">Downloads</router-link>
           </div>
        </div>
        <div class="footer-container__about__item">
          <h3>Info</h3>
           <div class="footer-container__about__links">
             <router-link to="{}">Delivery</router-link>
             <router-link to="{}">Terms</router-link>
             <router-link to="{}">Privacy</router-link>
           </div>
        </div>
        <div class="footer-container__about__item">
          <h3>Follow</h3>
           <div class="footer-container__about__social">
             <img alt="inst" src="../assets/icons/instagram.svg"/>
             <img alt="twit" src="../assets/icons/twiter.svg"/>
             <img alt="face" src="../assets/icons/facebook.svg"/>
           </div>
        </div>
      </div>
      <div class="footer-container__info">
        <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved.</p>
        <p>Responsive website design, Development & Hosting by mtc.</p>
      </div>
      <div class="footer-container__divider"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.footer-container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 495px;
  .footer-container__logo{
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    &__divider{
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      opacity: 0.9;
    }
    &__logo{
      margin: 0 20px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer-container__about{

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    .footer-container__about__item{
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      margin: 0 33px;
      height: 200px;
    }
    h3{
      letter-spacing: 0px;
      font-weight: bold;
      text-align: start;
      color: #FFFFFF;
      opacity: 1;
      font-family: Helvetica-Bold;
    }
    .footer-container__about__links{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      margin-top: 25px;

      a{
        font-family: Roboto-Regular;
        text-align: left;
        letter-spacing: 3px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 0.8;
        margin-top: 10px;
      }
    }
    @media (max-width: 660px) {

      .footer-container__about__links{
        display: none;
      }
      .footer-container__about__social{
        display: none;
      }
    }
    .footer-container__about__social{
      img{
        margin-top: 38px;

        margin-right: 15px;
      }
    }
  }
  @media (max-width: 660px) {
    .footer-container__about {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .footer-container__about__item{
        height: 30px;
      }
    }
  }
  .footer-container__info{
    margin-top: 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
      font-family: Roboto-Regular;
      text-align: center;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 0.5;
      max-width: 450px;
      max-height: 44px;
      margin: 10px;
      font-size: 13px;
    }
  }
  .footer-container__divider{
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0.9;
    margin-top: 40px;
  }

}

.footer-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -1;
}

.footer-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/Bitmap.png");
  z-index: -2;
}
</style>
