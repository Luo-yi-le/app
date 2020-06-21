<template>
  <div class="Login">
    <div class="background" style="width:100%;height:200pt">
      <div class="logininput">
        <div class="logininputTitle">
          <h2 style="margin:5pt 5pt;font-size: 20px">花炮小兵</h2>
        </div>
        <van-cell-group
          :border="false"
          style="padding-left:40pt;padding-top:10pt;padding-right:40pt;"
        >
          <van-field
            style="border-bottom:2px solid #f9dddc"
            v-model="userInfo.email"
            :placeholder="userInfo.email"
          />
        </van-cell-group>
        <van-cell-group
          :border="false"
          style="padding-left:40pt;padding-top:10pt;padding-right:40pt;border: 0 solid #ffffff;"
        >
          <van-field
            style="border-bottom:2px solid #f9dddc"
            type="password"
            v-model="userInfo.pwd"
            :placeholder="userInfo.pwd"
          >
            <span slot="button">
              <router-link to="/ForgetPwd" style="color:red">忘记密码？</router-link>
            </span>
          </van-field>
        </van-cell-group>
        <van-cell-group
          :border="false"
          style="padding-left:40pt;padding-top:20pt;padding-right:40pt;"
        >
          <van-button
            class="button"
            round
            type="danger"
            size="large"
            style="height:30pt"
            @click="userLogin"
          >登陆</van-button>
        </van-cell-group>
      </div>
    </div>
    <div style="position:relative;top:125pt;width:100%;height:30pt; ">
      <div style="margin: 0 auto;width:160pt;font-size: 20px">
        <span>还没有账号?</span>
        <span>
          <router-link to="/Regist" style="color:red">立即注册</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Api from "@/common/request/Api.ts";

@Component({})
export default class Login extends Vue {
  @Mutation("SET_TOKEN") SET_TOKEN: any;
  @Mutation("SET_USERINFO") SET_USERINFO: any;
  needBoard: boolean = false;
  userInfo = {
    email: "2318927272@qq.com",
    pwd: "admin"
  };

  mounted() {
    this.$emit("showfooter", false);
  }
  userLogin() {
    Api.account.basic_login(this.userInfo).then((res: any) => {
        let data=res.data;
          this.SET_TOKEN(data.token);
          this.SET_USERINFO(data);
          localStorage.setItem('token',data.token)
          setTimeout(()=>{
              this.$router.push({ path: `/` })
          },100)
    });
    console.log(this.$store.state);
  }
}
</script>
<style  scoped lang='scss'>
.Login {
  .background {
    // background: url("../assets/loginBg.png") no-repeat;
    background-size: 100% 100%;
    width: 118px;
    height: 39px;
    background-color: white;
  }
  .logininput {
    box-shadow: darkgrey 1px 2px 2px 1px;
    position: relative;
    margin: 0 auto;
    top: 80pt;
    width: 220pt;
    background-color: white;
    height: 220pt;
    border-radius: 10px;
  }
  .logininputTitle {
    text-align: center;
    padding-top: 10pt;
  }
  .logininputTitle h1 {
    color: #333333;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>