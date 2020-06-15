<template>
  <div class="test1">
    <ido-scroll
      class="scroll"
      :data="mData"
      pullDown
      pullUp
      @onRefresh="pullToRefresh"
      @onLoadmore="pullToLoadmore"
      @pullDownTransitionEnd="pullDownTransitionEnd(this)"
      @scrollToTop="scrollToTop(this)"
    >
      <ul class="wrap">
        <li class="item" v-for="(item, index) in mData" :key="index">{{ item }}</li>
      </ul>
      <!-- 其它更多内容... -->
    </ido-scroll>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import IdoScroll from "ido-scroll";
Vue.use(IdoScroll);

@Component({})
export default class test1 extends Vue {
  mData: any = [
    "ido-web",
    "ido-ui-css",
    "iso-vue",
    "ido-scroll",
    "ido-web",
    "ido-ui-css",
    "iso-vue",
    "ido-scroll"
  ];
  pullToRefresh(end) {
    setTimeout(() => {
      end();
    }, 2000);
  }

  pullToLoadmore(end) {
    this.getData()
      .then(end)
      .catch(err => {
        console.log(err);
        end();
      });
  }

  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        let newData = [
          "新来的数据",
          "新来的数据",
          "新来的数据",
          "新来的数据",
          "新来的数据",
          "新来的数据"
        ];
        this.mData = this.mData.concat(newData);
        resolve();
      }, 1000);
    });
  }

  pullDownTransitionEnd(param) {
    console.log(param);
  }

  scrollToTop(param) {
    console.log(param);
  }
}
</script>
<style  scoped lang='scss'>
.test1 {
  color: #000;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .scroll {
    font-size: 20px;
  }
  .item {
    font-size: 25px;
  }

  .wrap {
    margin: 10px;
  }
  .item {
    background-color: #fff;
    padding: 10px;
    height: 50px;
    width: 100%;
    line-height: 120px;
    text-align: center;
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
      display: block;
      filter: blur(1px);
    }
  }
}
</style>