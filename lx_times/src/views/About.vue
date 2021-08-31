.<template>
    <div class="box">
        
    </div>
</template>

<script>
import {teacher} from '@/http/api.js'
export default {
  data(){
    return{
      
    }
  },

  created(){
    this.gitlist()
  },
  methods:{
    async gitlist(){
      let res = await teacher({page:1,limit:10})
      console.log(res)
    }
  }
}
</script>

<style scoped lang = 'scss'>
  .box{
    width: 100%;
  }
</style>

