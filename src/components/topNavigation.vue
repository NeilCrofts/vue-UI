<template>
<div>
    <div class="top-nav">
        <div class="icon">
          <a href="#/introduce">
            <n-icon name='logo'></n-icon>
          </a>
        </div>
        <ul class="menu-right-link">
            <li><a target="_blank" href="https://gitee.com/NeilCrofts/">码云</a></li>
            <li><a target="_blank" href="https://github.com/NeilCrofts">github</a></li>
            <li>
                <router-link to="/introduce">文档</router-link>
            </li>
        </ul>
    </div>
    <div class="mobel-nav">
      <div @click="toggleMenu">
        <n-icon name="menu" class="menu" ></n-icon>
      </div>
      <n-icon name="logo" class="vue"></n-icon>
    </div>
</div>
</template>

<script>
import Icon from './icon.vue'
export default {
  components:{
      'n-icon':Icon
  },
  name:'top-nav',
  data(){
    return{
      isOpen:false
    }
  },
  mounted() {
  },
  methods: {
    toggleMenu(){
      this.isOpen= !this.isOpen
      this.$emit('handleOpen',this.isOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  z-index: 10;
  font-size: 16px;
  background: #fff;

  .icon {
    float: left;

    > a>svg {
      width: 40px;
      height: 40px;
    }
  }

  .menu-right-link {
    float: right;
    height: 40px;
    line-height: 40px;

    > li {
      display: inline-block;
      vertical-align: middle;
      margin-right: 50px;

      > a {
        color: #0A8AC2;
      }
    }
  }
}
.mobel-nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 20;
  display: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  .menu{
    color: #05d0df;
    cursor: pointer;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
  }
  .vue{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

@media (max-width: 900px){
  .top-nav{
    display: none;
  }
  .mobel-nav{
    display: block;
  }
}
</style>
