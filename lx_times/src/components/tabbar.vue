.<template>
    <div class="box">
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o" to='/Hone'>首页</van-tabbar-item>
        <van-tabbar-item icon="search" to='/about'>分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to='/lists'> 图书</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to='/my' >我的</van-tabbar-item>
   </van-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
          icon: {
            active: 'https://img01.yzcdn.cn/vant/user-active.png',
            inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
         },
        }
    }
};
</script>

<style>
.van-tabbar-item__icon {
    font-size: 60px;
}
.van-tabbar--fixed{
    height: 150px;
}

.van-tabbar-item{
    font-size: 40px;
}
</style>
