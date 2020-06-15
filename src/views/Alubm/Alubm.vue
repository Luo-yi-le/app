<template>
  <div class="AlubmPage">
    <van-nav-bar
      data-id="data-title"
      :title="titleContent"
      :placeholder="placeholder"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="header_title"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>-->
    <div class="over">
      <van-row class="lists">
        <van-col
          span="11"
          offset="1"
          class="goods_list"
          v-for="(data,index) of graduationPhoto.list"
          :key="index"
        >
          <div class="imgList" @click="dialogClick(data.imgs,imgUrl+graduationPhoto.Userfolder)">
            <van-image name="adapter" :src="imgUrl+graduationPhoto.Userfolder+'/'+(data.imgs)">
              <template v-slot:loading>
                <van-loading type="spinner" size="30" />
              </template>
            </van-image>
            <!-- <img name="adapter" :src="data.imgs" /> -->
          </div>
          <van-col span="24" class="lazy-left">
            <!-- <van-button type="primary" >组件调用</van-button> -->

            <!-- <div class="main">
              <div @click="openMask">打开弹窗</div>
              <dialog-bar
                v-model="sendVal"
                type="danger"
                title="我是标题"
                content="我是内容"
                :imgUrl="'http://111.231.7.27:9011/Alubm/img1/'+(index+1)+'.jpg'"
                v-on:cancel="clickCancel()"
                @danger="clickDanger()"
                @confirm="clickConfirm()"
                dangerText="关闭"
              ></dialog-bar>
            </div>-->

            <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
            <van-popup v-model="show" round position="bottom" :style="{ height: '90%' }">
              <img
                class="dialog_img"
                :src="'http://111.231.7.27:9011/Alubm/img1/'+(index+1)+'.jpg'"
              />
            </van-popup>-->
          </van-col>

          <!-- <van-col span="24" class="lazy-bottom">
            <h4>
              ￥121
              <span>￥23</span>
              <div>32折</div>
            </h4>
          </van-col>-->
        </van-col>

        <!-- <van-col span="11" offset="1" class="goods_list">
          <div class="imgList">
            <img name="adapter" />
          </div>
          <van-col span="24" class="lazy-left">
            <span>23</span>
          </van-col>

          <van-col span="24" class="lazy-bottom">
            <h4>
              2233
              <span>￥232</span>
              <div>23折</div>
            </h4>
          </van-col>
        </van-col>-->
      </van-row>
      <van-dialog
        v-model="show"
        title="标题"
        show-cancel-button
        class="dialog"
        get-containe=".goods_list"
      >
        <img class="dialog_img" :src="dialogImg" />
        <span>{{1}}</span>
      </van-dialog>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import Api from "@/common/request/Api.ts";
import dialogBar from "@/components/dialog/dialog.vue";

@Component({
  components: {
    "dialog-bar": dialogBar
  }
})
export default class Alubm extends Vue {
  alubmTitle: string;

  placeholder: boolean = true;

  dataList: string[] = [];
  graduationPhoto: ReslutInfo = {};
  show: boolean = false;
  sendVal: boolean = false;
  // imgUrl:string="http://111.231.7.27:1212/photoAlbum/Image/test/"
  imgUrl: string = "http://www.luoyile.cn/app1/img/alubm/";
  image: string = "https://img.yzcdn.cn/vant/apple-3.jpg";
  dialogImg: string = "";

  titleContent: string = "";
  constructor() {
    super();
  }
  created() {
    let __this = this;
    __this.getAlubm();
  }
  // getData1() {
  //   let that = this;
  //   Api.account
  //     .basic_login(true)
  //     .then((res: any) => {
  //       that.dataList = res.data;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  getAlubm() {
    let that = this;
    Api.Alubm
      .getAlubm({ token: "1443" })
      .then((res: any) => {
        that.graduationPhoto = res.data.graduationPhoto;
        that.titleContent = res.data.graduationPhoto.content;
      })
      .catch(e => {
        console.log(e);
      });
  }

  onClickLeft() {
    this.$router.go(-1)
  }
  showPopup() {
    let that = this;
    that.show = true;
  }
  dialogClick(item: any, index: any) {
    let that = this;
    that.dialogImg = "";
    that.show = true;
    that.dialogImg = index + "/" + item;
  }
}
interface ReslutInfo {
  content?: string;
  Userfolder?: string;
  list?: string[];
}
</script>
<style  scoped lang='scss'>
.mask {
  font-size: 20px;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
}
.dialog {
  .dialog_img {
    width: 100%;
  }
}
</style>