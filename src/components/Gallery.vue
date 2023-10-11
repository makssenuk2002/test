<template>
  <div class="gallery-container container">
    <div class="gallery-container__title">
      <h1>Customer Gallery</h1>
    </div>
    <div class="gallery-container__content">
      <div class="gallery-container__content__item">
        <img src="../assets/Bitmap-2@2x.png" alt="">
      </div>
      <div class="gallery-container__content__item">
        <img src="../assets/Bitmap-3@2x.png" alt="">
      </div>
      <div class="gallery-container__content__item">
        <img src="../assets/Bitmap@2x.png" alt="">
      </div>
      <div class="gallery-container__content__item">
        <img src="../assets/Bitmap-1@2x.png" alt="">
      </div>
    </div>
    <div class="gallery-container__btn">
      <custom-button text="View More"></custom-button>
    </div>
  </div>
</template>

<script setup>

import CustomButton from "@/components/CustomButton.vue";
</script>



<style scoped lang="less">
.gallery-container{
  width: 100%;
  min-height: 673px;
  box-sizing: border-box;
  padding-top: 93px;


  .gallery-container__content{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .gallery-container__title{
      font-family: Helvetica-Bold;
      text-align: center;
      letter-spacing: 0px;
      color: #222222;
      opacity: 1;
    }
    .gallery-container__content__item {
      margin-top: 38px ;
      img{
        width: 310px;
        height: 310px;
      }
    }

  }
  .gallery-container__btn{
    margin: 38px 0;

  }
  @media (max-width: 660px) {
    .gallery-container__content{
      justify-content: center;
    }
  }
}
</style>
