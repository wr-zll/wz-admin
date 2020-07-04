<template>
    <div id="login">
       <div class="login-warp">
           <ul class="menu-table">
               <li :class="{'current':item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{item.txt}}</li>
           </ul>
           <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size=medium >
                <el-form-item  prop="pass" class="itme-form">
                    <label class="aa">用户名</label>
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item  prop="checkPass" class="itme-form">
                    <label class="aa">密码</label>
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item prop="age" class="itme-form">
                    <label class="aa">验证码</label>
                   <el-row :gutter="12  ">
                        <el-col :span="15">
                            <el-input><div class="grid-content bg-purple"></div></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="blocks">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn blocks">提交</el-button>
                </el-form-item>
            </el-form>
       </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return{
            menuTab:[
                {txt:'登录',current:true},
                {txt:'注册',current:false}
            ],
             ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
        
    },
    created(){},
    //挂载完成后自动执行
    mounted(){},

    //写函数
    methods:{
        toggleMenu(data){
            this.menuTab.forEach(element => {
                element.current=false
            });
            data.current=true
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    props:{

    },
    watch:{

    }
}
</script>

<style lang="scss" scoped>
  #login {
      height: 100vh;
      background-color: #344a5d;
  }
  .login-warp{
      width: 330px;
      margin: auto;
  }
  .menu-table{
      text-align: center;
      li{
          display: inline-block;
          width: 88px;
          line-height: 36px;
          font-size: 14px;
          color: #ffffff;
          border-radius: 2px;
          cursor: pointer;
      }
  }
  .current{
          background-color: rgba(0, 0, 0, 1);
      }
      .login-form{
          margin-top: 29px;
          label{
              display:block;
              margin-bottom: 3px;
              font-size: 14px;
              color: #fff;
          }
      }
       
      .itme-form{
          margin-bottom: 20px;
      }
      .blocks{
          display: block;
          width: 100%;
      }
    .login-warp{
     padding-top: 150px;
    }
</style>
