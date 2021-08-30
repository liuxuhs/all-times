.<template>
    <div class="box">
        <div class="head">
            <img src="@/assets/5.png" alt=""/>
        </div>  
        <div class="cont"></div>
        <div class="foot">
              <van-field
             v-model="model"
             class="model"
             placeholder="用户名"
             :rules="[{ required: true, message: '请填写用户名' }]"
             name="用户名"
            />
             <van-field
              v-model="password"
              class="pwd"
              type="password"
              placeholder="密码"
             :rules="[{ required: true, message: '请填写密码' }]"
           />
              <p class="ti"><span>找回密码</span><span @click="qie">注册/验证码登录</span></p>
              <p class="login">
                <van-button type="danger" @click="login">登录</van-button>
              </p>
        </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      model:'',
      password:'',

    }
  },


  methods:{
   async login(){
     console.log(this.password);
       let res = await this.$axios.post('/login',{mobile:this.model,type:1,client:'1',password:this.password})
      console.log(res)

        if(res.data.code==200){
          this.$toast.success(res.data.msg)
          this.$router.push('/index')
       }else{
            this.$toast.fail(res.data.msg);
            return false
       }
    },
    qie(){
      this.$router.push('/login')
   }
  },

  
};
</script>

<style lang='scss'>
.box {
  width: 1024px;

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
    
    .ti{
       height: 100px;
       width: 80%;
       font-size: 30px;
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
      font-size: 30px;
      border-bottom: 1px solid #999999;
      line-height: 100px;
      margin: 0 auto;
      
    }
    .pwd{
      height: 100px;
      width: 80%;
      font-size: 30px;
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
