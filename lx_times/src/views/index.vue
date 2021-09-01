.<template>
    <div class="box">
        
            <div class="box-s">
                <router-view/>
            </div>
        

        <tabber></tabber>
    </div>
</template>

<script>
import tabber from '@/components/tabbar.vue'
export default {
    components:{tabber}
}
</script>
    
<style lang='scss'> 
 .box{
     width: 375px;

      .box-s{
        width: 100%;
        margin-bottom: 40px;
    }
 }
</style>
