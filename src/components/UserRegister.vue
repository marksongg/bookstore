<template>
  <div class="register">
      <form>
          <div class="lable">
              <label class="error">{{message}}</label>
              <input name="username" 
                type="text" 
                v-model.trim="username" 
                placeholder="请输入用户名"/>
              <input
                type="password"
                v-model.trim="password"
                placeholder="请输入密码"/>
              <input
                type="password"
                v-model.trim="password2"
                placeholder="请输入确认密码"/>
              <input 
                type="text" 
                v-model.trim="mobile" 
                placeholder="请输入手机号"/>
          </div>
          <div class="submit">
              <input type="submit" @click.prevent="register" value="注册"/>
          </div>
      </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'UserRegister',
    data(){
        return {
            username: '',
            password: '',
            password2: '',
            mobile: '',
            message: ''
        }
    },
    watch:{
      // 【用户名入力框】每按下一个键的时候都会被触发
        username(newVal){
          // 取消上一次的axios的请求
          this.cancelRequest();
          this.axios.get('/user/' + newVal, {
            cancelToken: new this.axios.CancelToken(
              cancel => this.cancel = cancel
            )
          })
          .then(response => {
            if(response.data.code == 200){
              let isExist = response.data.data;
              if(isExist){
                this.message = '该用户名已经存在！';
              } else {
                this.message = '该用户名不存在，可以进行注册！';
              }
            }
          })
          .catch(error => {
            if(this.axios.isCancel(error)){
              // 如果是请示被取消产生的错误，则输出取消请示的原因
              console.log('请示取消', error.message)
            } else {
              // 处理错误
              console.log(error)
            }
          })
        }
    },
    methods: {
        register(){
            this.message = '';
            if(!this.checkForm()) {
                return;
            }
            
            //进行注册
            // 注册用户信息：
            // 1 用户名：admin6
            // 2 密码：admin6
            // 3 手机号：123456

            let postUserInfo = {
              username: this.username,
              password: this.password,
              mobile: this.mobile
            };

            this.axios.post('/user/register', postUserInfo).then(response => {
              if(response.data.code == 200){
                alert(response.data.data);
                // 将注册成功的数据保存到store中
                // 1. 
                // 2. 
                this.saveUser(response.data.data);
                this.username = '';
                this.password = '';
                this.password2 = '';
                this.mobile = '';
                // 跳转到主页
                this.$router.push("/");
              }
            })
        },
        // [watch]里面进行调用
        cancelRequest(){
          if(typeof this.cancel === 'function') {
            this.cancel('请求终止')
          }
        },
        // 
        checkForm(){
            if(!this.username || !this.password || !this.password2 || !this.mobile){
                // this.$msgBox.showMsg({title: "所有字段不能为空"});
                // ☆使用了Element-plus插件alert方法☆
                this.$alert('所有字段不能为空', '警告', {
                    confirmButtonText: '确定'
                });
                return false;
            }

            if(this.password !== this.password2){
                // this.$msgBox.show({title: "密码和确认密码必须相同"});
                // ☆使用了Element-plus插件alert方法☆
                this.$alert('密码和确认密码必须相同', '警告', {
                    confirmButtonText: '确定'
                });
                return false;
            }

            return true;
        },
        ...mapMutations('user', ['saveUser'])
    }
}
</script>

<style scoped>
.register {
  margin: 5em auto 0;
  width: 44%;
}

.register input {
  padding: 15px;
  width: 94%;
  font-size: 1.1em;
  margin: 18px 0px;
  color: gray;
  float: left;
  cursor: pointer;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  outline: none;
  font-weight: 600;
  margin-left: 3px;
  background: #eee;
  transition: all 0.3s ease-out;
  border: solid 1px #ccc;
}

.register input:hover {
  color: rgb(180, 86, 9);
  border-left: solid 6px #40A46F;
}

.register .submit {
  /* padding: 5px 4px; */
  text-align: center;
}
.register input[type="submit"] {
  padding: 15px 15px;
  color: #fff;
  float: right;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: #40a46f;
  border: solid 1px #40a46f;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.5s ease-out;
  outline: none;
  width: 100%;
}

.register .submit input[type="submit"]:hover {
  background: #07793d;
  border: solid 1px #07793d;
}
.register .error{
  color: red;
  font-weight: bold;
  font-size: 1.1em;
}
</style>