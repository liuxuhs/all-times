.<template>
    <div class="box">
        <div class="head">
            <img :src="detail.thumb_img" alt="">
        </div>
        <div class="nav">
            <van-card
            currency=''
            :price="detail.click_rate+'人访问'"
            
            :title="detail.title"
            />
        </div>

        <div class="title">
            <span>{{detail.description}}</span>
        </div>

        <div class="foot" v-html="detail.content">
            
        </div>
    </div>
</template>

<script>
import {detail} from '@/http/api.js'
export default {
    data(){
        return{
            detail:[]
        }
    },
    created(){
        this.getdata()
    },

    methods:{
        async getdata(){
            var cid = this.$route.query.id
            let res = await detail({information_id:cid})
            console.log(res.data.data)
            this.detail=res.data.data

        }
    }
}
</script>

<style lang= 'scss' >
    .box{
        width: 375px;

        .head{
            width: 100%;
            height: 350px;
            background-color: antiquewhite;

            img{
                width: 100%;

            }
        }

        .nav{
            width: 100%;
          
            .van-card{
                background-color: white;
            }
            .van-card__title{
                margin-top: 10px;
                line-height: 20px;
                font-size: 20px;
            }
        }

        .title{
            width:100%;
            height: 100px;
            font-size: 0.42667rem;
            text-align: center;
            line-height: 100px;
            color: #999999;
            

            span{
                display: inline-block;
                width: 35%;
                height: 100%;
                border-bottom: 1px solid grey;
            }
        }
        .foot{
            width: 100%;
            margin-top: 20px;
        }
    }
</style>
