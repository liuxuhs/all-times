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
    
<style> 
  .box-s{
        width: 1024px;
        margin-bottom: 40px;
    }
</style>
