.<template>
    <div class="box">
        <div class="head">
            <img src="@/assets/2.png" alt="">

            <div class="box-s">
                <img src="@/assets/3.png" alt="">
                <span @click="log">登录/注册</span> 
            </div>  

        </div>
        <div class="nav">
                <div class="left">
                    <p class="top-s">0</p>
                    <p class="bot">我的学习</p>
                </div>
                <div class="left">
                    <p class="top">0</p>
                    <p class="bot">我的课程</p>
                </div>
                <div class="left">
                    <p class="top">0</p>
                    <p class="bot">我的积分</p>
                </div>
        </div>

        <div class="content">
          <van-cell-group class="content-s">
          <van-cell title="我的作业" is-link  style="margin-top:30px"/>
          <van-cell title="我的社区" is-link/>
          <van-cell title="课程订单" is-link style="margin-top:30px"/>
          <van-cell title="图书订单" is-link/>
          <van-cell title="优惠卷" is-link style="margin-top:30px"/>
          <van-cell title="学习卡" is-link/>
          <van-cell title="分销中心" is-link/>
          <van-cell title="消息中心" is-link style="margin-top:30px"/>
          <van-cell title="地址管理" is-link/>
          <van-cell title="关于我们" is-link/>
          <van-cell title="签到" is-link @click="qian"/>
          <van-cell title="设置" is-link  @click="qie"/>
         </van-cell-group>

        </div>
    </div>



</template>

<script>
import {data} from '@/http/api.js'
export default {
    data(){
        return{
            newdate:''
        }
    },

    methods:{
        log(){
            this.$router.push('/login')
        },

        qie(){
            this.$router.push('/setpwd')
        },

      async qian(){       
        //   this.newdate = new Date().toLocaleDateString()  //   console.log(this.newdate)
           let date = "2021-08-31"
          let res = await data({date:date, point: 1})
          console.log(res.data)

        }
    }
}
</script>

<style  lang = 'scss'>

    *{
        padding: 0px;
        margin: 0px;
    }

    .box{
        width: 100%;
        margin-bottom: 200px;
    
       .head{
           width: 100%;
           height: 550px;
           position: relative;

           img{
               width: 100%;
               height: 100%;
           }

           .box-s{
               width: 4.67333rem;
               height: 4.67333rem;
               border-radius: 50%;
               position: absolute;
               top: 25%;
               left: 42%;
               text-align: center;
               font-size: 30px;
               border: 2px solid  aqua;
         

               span{
                   margin-top: 40px;
                   color: whitesmoke;
                   font-size: 1.05333rem;
               }
           }
       } 

       .nav{
           width: 100%;
           height: 230px;
           display: flex;
           justify-content: space-between;

            .left{
           width: 33%;
           height: 90%;
            

           .top{
               margin-top: 20px;
               text-align: center;
               font-size: 1.54rem;
               color: red;
           }
           .top-s{
                margin-top: 20px;
               text-align: center;
               font-size: 1.54rem;
               color:greenyellow;
           }
           .bot{
                margin-top: 20px;
               text-align: center;
               font-size: 1.44rem;
               color: #999999;

            }
        }

      }

      .content{
          width: 100%;
          background-color: #f7f8fa;

        .content-s{
            background-color: #f7f8fa;
        }

          .van-cell{
              width: 100%;
              height: 100px;
              font-size: 40px;
              
              
              .van-cell__title, .van-cell__value{
                  margin-top: 30px;
              }

              .van-icon-arrow{
                  font-size: 40px;
                  margin-top: 30px;
              }

              .two{
                  margin-top: 40px;
              }
          }
      }
    
    }
</style>
