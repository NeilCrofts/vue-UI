<template>
  <div id="app" class="doc">
    <top-nav v-on:handleOpen="onClickOpen"></top-nav>
    <div class="menu-wrapper" :class="{'open':openTF}">
      <div class="menu">
        <h2>文档</h2>
        <ul class="ul">
          <li class="item-li">
            <router-link class="link-a" to="/introduce">介绍</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/getStart">快速上手</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/use">使用</router-link>
          </li>
        </ul>
        <h2>组件</h2>
        <ul class="ul">
          <li class="item-li">
            <router-link class="link-a" to="/button">button组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/tabs">tabs组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/input">input组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/layout">layout组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/grid">grid组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/toast">toast组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/popover">popover组件</router-link>
          </li>
          <li class="item-li">
            <router-link class="link-a" to="/other">other</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="router-view-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from './components/topNavigation';
export default {
  name:'view-doc',
  components: {TopNav},
  data(){
    return{
      openTF:false
    }
  },
  mounted() {
  },
  methods: {
    onClickOpen(isOpen){
      this.openTF = isOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
.doc {
  ::v-deep(.top-nav,.mobel-nav) {
    box-shadow: 0 2px 8px #f0f1f2;
  }

  .router-view-wrapper {
    padding-top: 70px;
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 2000px;
  }
  .menu-wrapper {
    width: 260px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 60px;
    left: 0;
    bottom: 0;
    border-right: 1px solid #e8e8e8;
    z-index: 10;
    background: #fff;

    .menu {
      padding-top: 10px;
      h2 {
        line-height: 22px;
        padding: 10px;
        font-size: 16px;
        color: #333;
        font-weight: 700;
      }

      .ul {
        .item-li{
          .link-a{
            text-decoration: none;
            display: inline-block;
            padding: 13px 0;
            width: 100%;
            padding-left: 20px;
            position: relative;
            color: #444;
            font-size: 14px;
          }
          .router-link-active{
            background: linear-gradient(145deg, rgba(191, 248, 251,0.5) 0%, rgba(0,172,181,0.5) 100%);
            &:after{
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              border-right: 3px solid  rgb(10, 138, 194);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1300px) {
  .doc{
    .router-view-wrapper{
      margin-left: 290px;
    }
  }
}
@media (max-width: 900px){
  .doc{
    .router-view-wrapper{
      padding: 70px 20px;
    }
    .menu-wrapper{
      width: 260px;
      position: fixed;
      overflow-x: hidden;
      overflow-y: auto;
      top: 40px;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-color: #f9f9f9;
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transform: translateX(-280px);
      border-right: 0;
    }
    .open{
      transform: translateX(0px);
    }
    .router-view-wrapper{
      margin: auto;
    }
  }
}
</style>
