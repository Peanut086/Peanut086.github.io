<script setup>
import {onMounted, ref, defineComponent, reactive, computed} from "vue";
import {CSharp, BrandGit} from "@vicons/tabler";
import {randomColor} from "../../utils/RandomColor.ts";

import pkg from 'naive-ui';
const { NTag, NIcon } = pkg;
import {LogoVue} from '@vicons/ionicons5'
import Avatar from '../PnAvatar/index.vue'
import PnArticle from '../PnArticle/index.vue'


const pnHomeHeight = ref(0);
const navBarHeight = ref(0);
const tecList = [
  {
    label: '',
    icon: LogoVue
  },
  {
    label: '',
    icon: CSharp
  },
  {
    label: '',
    icon: BrandGit
  }
]

/*
* 使用计算属性随机获取颜色
* */
function getRandomColor() {
  return randomColor();
}

/*
* @description: 将Home区域的最小高度与父级元素高度统一
* */
function setHomeMinHeight() {
  const VPContent = document.querySelector("#VPContent");
  const VPNav = document.querySelector(".VPNav");
  pnHomeHeight.value = VPContent.clientHeight;
  navBarHeight.value = VPNav.clientHeight;
}

onMounted(() => {
  setHomeMinHeight();
  window.addEventListener("resize", setHomeMinHeight);
})
</script>

<template>
  <div class="flex-row pn-home" ref="pnHome"
       :style="{'--pn-home-height':pnHomeHeight + 'px','--pn-nav-height':navBarHeight + 'px'}">
    <div class="slogan-post flex-column">
      <div class="flex-row slogan">
        <Avatar class="avatar"/>
        <div class="flex-column pnut-info">
          <div class="site-name gradation-text2">JavaScript大王</div>
          <div class="site-desc gradation-text1">这个人很懒，啥也不是...</div>
          <div class="flex-row author-tag">
            <n-tag v-for="item in tecList" type="success" :size="'medium'" class="tag-item">
              {{ item.label }}
              <template #icon>
                <n-icon size="16" :color="getRandomColor()" depth="5.0">
                  <component :is="item.icon"/>
                </n-icon>
              </template>
            </n-tag>
          </div>
        </div>
      </div>
      <div class="post">
        <PnArticle/>
      </div>
    </div>
    <div class="flex-column dynamic-card-list">
      <div>Right</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pn-home {
  width: 80%;
  margin: 0 auto 0 auto;
  padding-top: var(--pn-nav-height);

  .slogan-post {
    width: 70%;

    .slogan {
      width: 100%;
      height: 30%;
      box-shadow: var(--vp-shadow-2);
      margin-bottom: 1%;
      margin-top: 1%;

      .avatar {
        width: 20%;
      }

      .pnut-info {
        width: 80%;
        max-height: 100%;

        .site-name {
          font-size: var(--pn-site-name-font-size);
          font-weight: bold;
          padding: 2% 0;
          margin-bottom: 1%;
        }

        .site-desc {
          width: 100%;
          font-size: var(--pn-site-desc-font-size);
          margin-bottom: 1%;
          text-align: center;
        }

        .author-tag {
          flex-wrap: nowrap;
          margin-top: 1%;

          .tag-item {
            margin: 0 4%;
          }
        }
      }
    }

    .post {
      width: 100%;
      height: 100%;
      box-shadow: var(--vp-shadow-2);
      margin-bottom: 1%;
      overflow: auto;
    }
  }

  .dynamic-card-list {
    width: 30%;
    margin-left: 1%;
  }
}
</style>
