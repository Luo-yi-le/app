<template>
  <div class="Index_Page">
    <van-nav-bar
      :title="alubmTitle"
      :placeholder="placeholder"
      left-text="返回"
      left-arrow
      class="header_title"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <van-grid :gutter="10" column-num="2" :center="true" square>
        <van-grid-item
          v-for="value in manu"
          :key="value.id"
          icon="photo-o"
          @click="onclick(value.rPath,value.status)"
          :text="value.name"
        ></van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch, Inject } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Tips from "@/common/global/Tips.ts";
import Api from "@/common/request/Api.ts";

@Component({})
export default class Index extends Vue {
  @Mutation("SET_ALUBM_TITLE") SET_ALUBM_TITLE: any;
  @Getter("alubmTitle") alubmTitle: string;

  placeholder: boolean = true;
  constructor() {
    super();
    this.getMune();
  }
  manu: any[] = [
    { id: 1, name: "相册模块", path: "/page/alubm" },
    { id: 2, name: "留言模块", path: "/message/index" },
    { id: 3, name: "待定1", path: "" },
    { id: 4, name: "待定2", path: "" },
    { id: 5, name: "待定2", path: "" },
    { id: 6, name: "待定2", path: "" },
    { id: 7, name: "待定2", path: "" },
    { id: 8, name: "待定2", path: "" },
    { id: 9, name: "待定2", path: "" },
    { id: 10, name: "待定2", path: "" },
    { id: 11, name: "待定2", path: "" },
    { id: 12, name: "待定2", path: "" }
  ];

  onclick(path:string,status:number) {
    let tip: TipsInfo = {
      message: "暂未开放",
      type: "fail",
      forbidClick: true,
      duration: 1000
    };
    if (status==1) {
      let tips = new Tips(tip);
    } else {
      this.$router.push({ path: `${path}` }); //, query: { id: "12" } }
    }
  }

  created() {
    this.SET_ALUBM_TITLE("首页");
    // console.log(this.alubmTitle);
  }

  getMune() {
    let __this = this;
    Api.Mune.selectMuneAll(true).then((res:ResultInfo)=>{
      if(res.code==200){
        console.log(res)
        __this.manu=res.data;
      }
      
    });
  }

  // @Watch("$route")
  // getPath() {
  //   let that = this;
  //   console.log(this.$route.path);
  //   this.SET_ALUBM_TITLE("首页");
  // }
  // @Watch("alubmTitle", { immediate: true, deep: true })
  // onChange(val, val1) {
  //   this.alubmTitle=val;
  //   val1="";
  //   console.log(val, val1);
  // }
}
interface ResultInfo {
    code: number;
    data: any[];
    success?: string;
    error?: string
}

type ToastType = "text" | "loading" | "success" | "fail" | "html";
type ToastPosition = "top" | "middle" | "bottom";
type ToastLoadingType = "circular" | "spinner";
interface TipsInfo {
  type?: ToastType;
  position?: ToastPosition;
  message: string;
  icon?: string;
  iconPrefix?: string;
  overlay?: boolean;
  forbidClick?: boolean;
  loadingType?: ToastLoadingType;
  duration?: number;
  className?: any;
}
</script>
<style  scoped lang='scss'>
</style>