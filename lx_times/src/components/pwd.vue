.<template>

    <div>
        <div class="foot">
            
            <van-field
             v-model="mobile"
             class="model"
             placeholder="请输入电话号码"
             :rules="[{ required: true, message: '请填写用户名' }]"
            />
            
             <van-field
              v-model="code"
              class="pwd"
              type="password"
              placeholder="请输入验证码"
             :rules="[{ required: true, message: '请填写密码' }]"
           />
              <van-field
             v-model="password"
             class="model"
             placeholder="请输入密码"
             :rules="[{ required: true, message: '请填写密码' }]"
            />
              
              <p class="login">
                <van-button type="danger" @click="defind">确定</van-button>
              </p>
          <span class="yan" @click="huo" v-show="show">{{text}}</span>
          

        </div>

    </div>
</template>

<script>
import {password,smsCode} from '@/http/api.js'
export default {
    data(){
        return{
            mobile:'',
            code:'',
            password:'',
            show:true,
            text:'获取验证码'
        }
    },

    methods:{
     async  huo(){
    var reg = /^1[3-9]\d{9}$/
    if(!reg.test(this.mobile)){
        this.$toast.fail('手机格式不对')
        return false
    }
    var time = 60;
    var times = setInterval(()=>{
        this.text = `还有${time}后结束`
        time--
        if(time<=0){
            clearInterval(times)
            this.text="获取验证码"
        }

    },1000)

      let mobile = this.mobile
      console.log(mobile)
     let  res = await smsCode({mobile:mobile,sms_type:'login'})
       console.log(res.data.msg)
    },

    async defind(){
        let res = await password({mobile:this.mobile,sms_code:this.code,password:this.password})
        console.log(res.data)
    }
 }
}
</script>

<style lang='scss'>
.foot{
    width: 100%;
    height: 600px;
    text-align: center;
    margin-top: 100px;
    position: relative;
    .yan{
        position: absolute;
        font-size: 35px;
        color: red;
        top: 16px;
        right: 100px;

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
</style>
