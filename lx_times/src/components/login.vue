.<template>
    <div class="box">
        <div class="head">
            <img src="@/assets/5.png" alt=""/>
        </div>  
        <div class="cont"></div>

        <div class="foot">
            
            <van-field
             v-model="mobile"
             class="model"
             placeholder="请输入电话号码"
             :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <span class="yan" @click="huo">获取验证码</span>
             <van-field
              v-model="code"
              class="pwd"
              type="password"
              placeholder="请输入验证码"
             :rules="[{ required: true, message: '请填写密码' }]"
           />
              <p class="ti"><span>*未注册的手机号将自动注册</span><span  @click="qie">使用密码登录</span></p>
              <p class="login">
                <van-button type="danger"  @click="login">登录</van-button>
              </p>
        </div>
        

    </div>
</template>

<script>
export default {
  data() {
    return {
      mobile:'',
      code:'',
      show:false,
    }
  },

  created(){
    
  },
  methods:{
  async huo(){
     let mobile = this.mobile
      console.log(mobile)
     let  res = await this.$axios.post('/smsCode',{mobile:mobile,sms_type:'login'})
   
       console.log(res.data.msg)

       if(res.data.code==200){
          this.$toast.success(res.data.msg)
       }else{
            this.$toast.fail(res.data.msg);
            return false
       }
     },


     async login(){
       let code = this.code
       let res = await this.$axios.post('/login',{sms_code:code,mobile:this.mobile,type:2,client:1})
       console.log(res.data.data)
     
      
       if(res.data.code==200){
          this.$toast.success(res.data.msg)
         this.$router.push('/index')
        
       }else{
            this.$toast.fail(res.data.msg);
            return false
       }
     },
    qie(){
      this.$router.push('/alltime')
   }
  },

  
};
</script>

<style scoped lang='scss'>

  *{
    margin: 0px;
    padding: 0px;
  }
  .van-toast{
    width: 400px;
    height: 200px;
    font-size: 40px
  }
.box {
  width: 750px;
  position: relative;
  .head{
    width: 100%;
    height: 740px;
    background-color: aqua;

    img{
      width: 100%;
      height: 100%;
    }



  }
  .cont{
    width: 100%;
    height: 70px;
    background-color:ghostwhite;;
    border-radius: 10px;
    margin-bottom: 123px;
    
  }
  .foot{
    width: 100%;
    height: 600px;
    text-align: center;
    
    
    .yan{
        font-size: 35px;
        margin-left: 720px;
        color: red;
    }


    .ti{
       height: 100px;
       width: 80%;
       font-size: 40px;
       line-height: 100px;
       margin: 0 auto;
       color: #999999;
       display: flex;
       justify-content: space-between;
    }
  

    // .cent{
    //   width: 90%;
    //   height: 500px;
    //   background-color: azure;
    // }

    .model{
      height: 100px;
      width: 80%;
      font-size: 40px;
      border-bottom: 1px solid #999999;
      line-height: 100px;
      margin: 0 auto;
      
      
    }
    .pwd{
      height: 100px;
      width: 80%;
      font-size: 40px;
      border-bottom: 1px solid #999999;
       line-height: 100px;
       margin-top: 20px;
       margin: 0 auto;
    }

    button{
      width: 80%;
      height: 150px;
      margin-top: 200px;
      font-size: 55px;
   }
  }
 
}

</style>
