<template>
  <div class="Page">
    <!-- <van-nav-bar data-id="data-title" :title="alubmTitle" left-text="返回" left-arrow class="header_title">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <keep-alive>
      <router-view class="router-view" />
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import VFooter from "@/components/footer/footer.vue";
import Api from "@/common/request/Api.ts";
@Component({
  components: {
    "v-footer": VFooter
  }
})
export default class Page extends Vue {
  @Getter("alubmTitle") alubmTitle: string;
  @Mutation('SET_ALUBM_TITLE') SET_ALUBM_TITLE:any;
  constructor() {
    super();
  }
  created() {
    this.getRule();
    // console.log(this.alubmTitle);
    //   if (sessionStorage.getItem("store")) {
    //     this.$store.replaceState(
    //       Object.assign(
    //         {},
    //         this.$store.state,
    //         JSON.parse(sessionStorage.getItem("store"))
    //       )
    //     );
    //   }
    //   //在页面刷新时将vuex里的信息保存到sessionStorage里
    //   window.addEventListener("beforeunload", () => {
    //     sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    //   });
  }
  getIP(){
    let __this = this;
    Api.Ip.ip(true).then(res=>{
    })
  };

  getRule(){
    let __this = this;
    let p={
      token:__this.$store.state.token,
      email:"2318927272@qq.com",
      name:__this.$store.state.author,
    }
    Api.Rule.rule(p).then(res=>{
    })
  }
}
</script>
<style  scoped lang='scss'>
.Page {
  width: 100%;
}
</style>