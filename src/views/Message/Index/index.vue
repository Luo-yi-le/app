<template>
  <div class="Message_index">
    <van-nav-bar
      :title="title"
      :placeholder="placeholder"
      left-text="返回"
      left-arrow
      class="header_title"
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <van-collapse v-model="activeName" accordion v-for="(data,index) in dataList" :key="index">
        <van-collapse-item
          :title="data.mTitle+'---'+formatData(data.time)"
          :name="index+1"
          class="index_content"
          label-class="font"
          value-class="font"
          title-class="font"
        >
          <div v-html="data.content"></div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Api from "@/common/request/Api.ts";

@Component({})
export default class index extends Vue {
  title: string = "留言";
  placeholder: boolean = true;
  activeName: string = "0";
  dataList: any[] = [
    {
      mTitle: "留言",
      time: 1590016869000,
      content: "内容1内<p>223<p/>"
    },
    { mTitle: "留言", time: 1590061869000, content: "内容2" },
    { mTitle: "留言", time: 1590061869000, content: "内容3" },
    { mTitle: "留言", time: 1590061869000, content: "内容4" }
  ];
  constructor() {
    super();
    this.getMessage();
  }

  getMessage() {
    let __this = this;
    Api.Message.selectMessageAll(true).then((res: ResultInfo) => {
      if (res.code == 200) {
        __this.dataList = res.data;
      }
    });
  }
  formatData(timeValue) {
    var date = new Date(timeValue);
    var y = date.getFullYear();
    var m: any = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d: any = date.getDate();
    d = d < 10 ? "0" + d : d;
    var h: any = date.getHours();
    h = h < 10 ? "0" + h : h;
    var minute: any = date.getMinutes();
    var second: any = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }

  onClickLeft() {
    this.$router.go(-1);
  }
}

interface ResultInfo {
  code: number;
  data: any[];
  success?: string;
  error?: string;
}
</script>
<style  scoped lang='scss'>
</style>