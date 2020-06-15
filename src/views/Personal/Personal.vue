<template>
  <div class="Personal">
    <div class="user">
      <div class="demo-fit">
        <el-avatar shape="square" :size="100" fit="contain" :src="url"></el-avatar>
      </div>
      <header class="profile-header">
        <h3>当前用户：{{ username }}</h3>
      </header>
      <main class="profile-body">
        <div class="address">
          <el-button>
            我的地址
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
      </main>
      <footer class="profile-footer">
        <div>
          <el-button type="danger" @click="logout">退出登录</el-button>
        </div>
      </footer>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Toast, NavBar } from "vant";
@Component({})
export default class Personal extends Vue {
  username: string = "张三";
  fits = ["fill", "contain", "cover", "none", "scale-down"];
  url =
    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
  logout() {
    console.log("点击logout");
  }
  onClickLeft() {
    Toast("返回");
  }
  onClickRight() {
    Toast("按钮");
  }
  created() {}
}
</script>
<style  scoped lang='scss'>
.Personal {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  .login {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .el-input {
      width: 80%;
      margin-bottom: 10px;
    }
  }
  .wrap {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .profile-header {
      height: 50px;
      line-height: 50px;
    }
    .el-button {
      width: 100%;
      margin-top: 10px;
    }
  }
  .slideInRight {
    animation-duration: 0.25s;
  }
  .user {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .profile-header {
      height: 50px;
      line-height: 50px;
    }
    .el-button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>