<template>
  <div class="discover-container">
    <div class="img"></div>
    <div class="discover-container__info">
      <div class="discover-container__info__uptitle">
        <div>Quality Craftmanship from build to delivery</div>
      </div>
      <div class="discover-container__info__title">
        <h1>Discover the beauty of a <br/> handmade kitchen</h1>
      </div>
      <div class="discover-container__info__subtitle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
        </p>
      </div>
      <div class="discover-container__info__order-now">
        <custom-button text="About us"></custom-button>
      </div>
    </div>
  </div>

</template>

<script setup>

import CustomButton from "@/components/CustomButton.vue";
</script>



<style scoped lang="less">
.discover-container{
  padding-top: 1px;
  width: 100%;
  height: 667px;
  display: flex;
  box-sizing: border-box;

  .img{
    width: 50%;
    height: 100%;
    background: url(../assets/Bitmap-4@2x.png) no-repeat center;
    background-size: cover;
  }
  .discover-container__info{
    width: 50%;
    height: 100%;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 100px;
    .discover-container__info__uptitle{
      height: 18px;
      text-align: left;
      letter-spacing: 3px;
      color: var(--main-color);
      text-transform: uppercase;
      opacity: 1;
      font-family: Roboto-Regular;
      margin-bottom: 20px;

    }
    .discover-container__info__title{
      border-bottom: 33px;
      height: 94px;
      text-align: left;
      letter-spacing: 0px;
      color: #222222;
      opacity: 1;
      font-family: Helvetica-Bold;
    }
    .discover-container__info__subtitle{
      text-align: left;
      letter-spacing: 0px;
      color: var(--gray-color);
      opacity: 1;
      font-family: Roboto-Regular;
      max-width: 579px;
    }
    .discover-container__info__order-now{
      width: 200px;
      height: 50px;
    }
  }
  @media (max-width: 768px) {
    .img{
      display: none;
    }
    .discover-container__info{
      width: 100%;
    }
    .discover-container__info__title{
      margin: 50px 0;
    }
  }
}
</style>
