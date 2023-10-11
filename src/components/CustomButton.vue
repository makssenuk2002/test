<template>
  <button class="button" :style="{width:width}">{{text}}</button>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  text: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '228px',
  },
})
</script>



<style scoped lang="less">
.button{
  width: 228px;
  height: 60px;
  background: var(--main-color);
  box-shadow: 0px 2px 10px #00000033;
  border-radius: 30px;
  opacity: 1;
  text-align: center;
  letter-spacing: 3px;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
  font-family: Roboto-Regular;
  border: none;
  &:hover{
    cursor: pointer;
    background: var(--main-hover-color);
  }
}
</style>
