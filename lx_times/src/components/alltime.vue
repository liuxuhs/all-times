.<template>
    <div class="box">
        <div class="head">
            
        </div>  
        <div class="cont"></div>

        <div class="foot">
            
              <van-field
            class="model"
             placeholder="用户名"
             :rules="[{ required: true, message: '请填写用户名' }]"
             name="用户名"
            />
             <van-field
             v-model="pwd"
              class="pwd"
              type="password"
              placeholder="密码"
             :rules="[{ required: true, message: '请填写密码' }]"
           />
              <p class="ti"><span>找回密码</span><span>注册/验证码登录</span></p>
              <p class="login">
                <van-button type="danger" >登录</van-button>
              </p>
        </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      pwd:''
    };
  }
};
</script>

<style lang='scss'>
.box {
  width: 1024px;

  .head{
    width: 100%;
    height: 500px;
    background-color: aqua;
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
       width: 90%;
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
      width: 90%;
      font-size: 30px;
      border-bottom: 1px solid #999999;
      line-height: 100px;
      margin: 0 auto;
      
    }
    .pwd{
      height: 100px;
      width: 90%;
      font-size: 30px;
      border-bottom: 1px solid #999999;
       line-height: 100px;
       margin-top: 20px;
       margin: 0 auto;
    }

    button{
      width: 80%;
      height: 150px;
      margin-top: 40px;
      font-size: 55px;
    
    
   }
  }
}

</style>
