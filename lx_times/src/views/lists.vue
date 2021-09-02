.<template>
    <div class="box">
        <div class="box-s">
        <van-tabs v-model="active"  @click="qie">
        <van-tab title="全部">
             <van-card
             @click="chuan(item.id)"
            v-for="(item,index) in quan" :key="index"
            currency=''
            :price="item.click_rate"
            :desc="item.description"
            :title="item.title"
            :thumb="item.thumb_img"
            />

        </van-tab>
        <van-tab  v-for="(item,index) in head" :key="index" :title="item.name" :name="item.id">
            <van-card
             @click="chuan(item.id)"
            v-for="(item,index) in list" :key="index"
            currency=''
            :price="item.click_rate"
            :desc="item.description"
            :title="item.title"
            :thumb="item.thumb_img"
            />

            <van-empty description="暂无咨询" v-show="show" />

        </van-tab>
        </van-tabs>
        </div>
    </div>
</template>

<script>
import {infor,index} from '@/http/api.js'
export default {
        data(){
            return{
                quan:[],
                list:[],
                active:'0',
                head:[],
                cid:0,
                page:1,
                limit:10,
                show:false
            }
        },
        created(){
            this.getnav()
            this.getquan()
        },

        methods:{
           async qie(name){
                console.log(name)
                this.cid=name
                let res = await this.$axios.post('http://120.53.31.103:84/api/app/information/index',{page:this.page,limit:this.limit,classify_id:this.cid})
                this.list=res.data.data.list
                console.log(res.data.data.list)

                if(this.list.length==0){
                    this.show=true
                }else{
                    this.show=false
                }
            },



            async getnav(){
                let res = await infor()
                console.log(res.data.data)
                this.head=res.data.data
            },

            async getquan(){
                let res = await index()
                console.log(res.data.data)
                this.quan=res.data.data.list
            },

            chuan(id){
                console.log(id)
                this.$router.push('news?id='+id)
            }


     }
}
</script>

<style  lang ='scss'>
    .box{
        width: 375px;
        .box-s{
            width: 100%;
            .van-tab {
                margin-left: 10px;
            }
        }
    }
</style>
