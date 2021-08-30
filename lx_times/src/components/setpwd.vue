.<template>
    <div class="box">
        <van-cell-group class="content-s">
              <van-cell title="设置密码" is-link  @click="qie"/>
              <van-cell title="注销账号" is-link/>
         </van-cell-group>
        <van-button type="danger" class="out">退出登录</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        qie(){
            this.$router.push('/pwd')
        }
    }
}
</script>

<style lang='scss'>
      .van-cell{
              width: 100%;
              height: 200px;
              font-size: 40px;
              
              
              .van-cell__title, .van-cell__value{
                  margin-top: 100px;
              }

              .van-icon-arrow{
                  font-size: 40px;
                  margin-top: 100px;
              }

              .two{
                  margin-top: 100px;
              }
          }

 .out{
      width: 900px;
      height: 130px;
      margin-top: 200px;
      font-size: 55px;
      margin-left:50px; 
      border-radius: 20px;
   }
</style>
