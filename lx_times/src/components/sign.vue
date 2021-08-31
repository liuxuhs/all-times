.<template>
    <div class="box">
         <div class="head">
            <img src="@/assets/2.png" alt="">

            <div class="box-s">
                <p class="left"><img src="@/assets/3.png" alt="">积分:1</p>
                <p class="right">签到规则</p>
            </div>  

            <div class="data">
               <van-cell title="选择多个日期" :value="text" @click="show = true" />
                <van-calendar v-model="show" type="multiple" @confirm="onConfirm" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
      text: '',
      show: false,
    };
  },
  methods: {
    onConfirm(date) {
      this.show = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
  },
}
</script>

<style scoped  lang='scss'>

    .box{
        width: 100%;

          .head{
           width: 100%;
           height: 550px;
           position: relative;  

           

           .box-s{
               width: 100%;
               height: 1.67333rem;
               position: absolute;
               top: 25%;
               left: 5%;
               display: flex;
               justify-content: space-between;
               

               .left{
                //    margin-top: 40px;
                   color: whitesmoke;
                   font-size: 30px;
               }
               .right{
                //    margin-top: 40px;
                   color: whitesmoke;
                   font-size: 30px;
                   width: 40%;
                   height: 50px;
                   border:1px solid white; 
                   text-align: center;
                   align-items: 100px;
                   border-radius: 20px;
               }
           }
       } 

      
          
            .van-cell{
                margin:  0 auto;
                width: 70%;

            .van-popup--bottom{
               width: 70%;
               
            }
        }

           
       
    }
</style>
