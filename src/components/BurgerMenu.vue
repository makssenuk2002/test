<template>
  <div class="burger-menu" @click.stop="toggleMenu">
    <div class="burger-icon">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <transition name="slide-fade">
      <div class="menu" v-if="isOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.burger-menu {
  cursor: pointer;
}

.burger-icon {
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  .bar {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: 0.4s;
  }

  .bar:nth-child(2) {
    margin: 4px 0;
  }
}

.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  padding: 10px;
  border-radius: 5px;
  z-index: 10;
  a{
    color: black !important;
  }
}
</style>
