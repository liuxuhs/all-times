.<template>
    <div class="box">
        <div class="box-s">
            <div class="head">
                <van-card
                :desc="data.real_name"
                :thumb="data.avatar"
                />
            </div>

            <van-tabs @click="onClick">
            <van-tab title="教师介绍">
                <p id="top">
                    老师简介
                </p>
                <p id="but">
                    {{data.introduction}}
                </p>


            </van-tab>
            <van-tab title="主讲课程">

                <van-card
                @click="xiang(item)"
                v-for="(item,index) in list" :key="index"
                :num="item.price"
                :price="item.sales_num+'人已经报名'"
                currency=""
                :title="item.title"
                :thumb="item.cover_img"
                />
            </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {teachers} from '@/http/api.js'
export default {
    data(){
        return{
            currency:false,
            t_id:0,
            data:[],
            list:[]
        }
    },

    created(){
        this.t_id= this.$route.query.id
        this.gitdata()
        this.gitlist()
    },

    methods:{
        onClick(name, title) {
         
       },



        async gitdata(){
          console.log(this.t_id)
            let res= await this.$axios.get('http://120.53.31.103:84/api/app/teacher/'+ this.t_id + '?')
            console.log(res.data.data.teacher)
            this.data=res.data.data.teacher
        },
        
        async gitlist(){
             let res= await this.$axios.post('http://120.53.31.103:84/api/app/teacher/mainCourse?='+ this.t_id + '?') 
            console.log(res.data.data.list)
            this.list=res.data.data.list
        },

        xiang(item){
            console.log(111)
            this.$router.push('/datali?id='+item.id)
        }

    }
}
</script>

<style lang = 'scss'>
    .box{
        width: 375px;
        .box-s{
            width: 375px;
            .head{
                width: 100%;
                height: 3.33333rem;

                .van-card__desc{
                    margin-top: 20px;
                }

                .van-tabs__nav--line{
                    border: 1px solid #cccccc;
                }
            }

            #top{
                font-size: .32rem;
                color: #cccccc;
                margin-top: 5px;
                margin-left: 10px;
                
            }
            #but{
                font-size: .34rem;
                margin-top: 20px;
                margin-left: 10px;
                
            }
        }
    }

</style>
