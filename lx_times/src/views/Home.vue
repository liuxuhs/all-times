<template>
  <div class="home">
      <div class="head">
        <div class="left">

        </div>
        <div class="cont">
            <input type="text" class="search">
        </div>
        <div class="right">

        </div>

      </div>
      <div class="banner">
          <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
      </div>

  </div>
</template>

<script>


export default {
  data(){
    return{

    }
  },

}
</script>
<style lang="scss">
    .home{
      width: 375px;

    .head{
      width: 100%;
      height: 130px;
      background-color: aqua;
      display: flex;

      .left{
        width: 100px;
        height: 100%;
        background-color: aquamarine;
      }
      .cont{
        width: 800px;
        height: 85px;

        .search{
          width: 100%;
          height: 100%;
          border-radius:50px; 
          border: none;
        }
      }


    }

    


    }
</style>

