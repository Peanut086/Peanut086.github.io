<script setup lang="ts">

</script>

<template>
  <div class="flex-column avatar">
    <div class="flex-row avatar-img">
      <img src="../../../../public/logo2.png" alt="avatar">
    </div>
    <div class="avatar-name">Peanut</div>
  </div>
</template>

<style scoped lang="scss">
.avatar{
  width: 100%;
  height: 100%;

  .avatar-img{
    flex: 1;
    width: 100%;

    img{
      width: 80%;
      height: 80%;
      border-radius: 50%;
    }

    &:hover{
      animation: rotate .5s linear;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .avatar-name{
    height: 20%;
    font-size: var(--pn-font-title-size);
    font-weight: var(--pn-font-weight-bold);
    background-image: linear-gradient(to right, #76e6de, #62c3b6);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>
