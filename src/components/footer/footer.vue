<template>
  <div class="footer_page">
    <van-tabbar route v-model="Tactive"  active-color="#07c160" inactive-color="#000">
      <van-tabbar-item
        v-for="item in indexNav"
        :key="item.index"
        icon="home-o"
        :to="item.path"
        :name="item.title"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
@Component({})
export default class Footer extends Vue {
  @Getter("indexNav") indexNav: any;
  @Getter("author") author: string;
  @Mutation('SET_AUTHOR') SET_AUTHOR:any;
  Tactive:number = 0;
  created() {
  //  setTimeout(() => {
  //     console.log(this.indexNav,this.author)
  //  }, 1000);
  }

  // mounted(){
  //   this.changeAuthor('帅锅');
  // }
  //  changeAuthor(name:string) {
  //   this.SET_AUTHOR(name);
  // }
}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  display: flex;
  flex-direction: row;
  section {
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
}
.index {
}
</style>
