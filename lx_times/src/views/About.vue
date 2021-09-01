.<template>
    <div class="box">
        <div class="box-s">
      <van-card
      v-for="(item,index) in list " :key="index"
        :desc="item.real_name"
        :title="item.introduction"
        :thumb="item.avatar"
        class="lis"
        @click="dilt(item)"
    />
        </div>
    </div>
</template>

<script>
import {teacher} from '@/http/api.js'
export default {
  data(){
    return{
        list:''
    }
  },

  created(){
    this.gitlist()
  },
  methods:{
    async gitlist(){
      let res = await teacher({page:1,limit:10})
      console.log(res.data.data.list)
      this.list=res.data.data.list
    },

    dilt(item){
      this.$router.push('/teachlist?id='+item.id)
    }
  }
}
</script>

<style  lang = 'scss'>
  .box{
    width: 375px;

    .box-s{
      width: 375px;
    }
    .lis{
      width: 90%;
      height: 100px;
      margin: 0 auto;
      border-radius: 10px;
      margin-top: 20px;
    }
  }
</style>

