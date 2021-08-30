<template>
  <div class="home">
      <div class="head">
        <div class="left">

        </div>
        <div class="cont">
            <input type="text" class="search" placeholder="搜索">
        </div>
        <div class="right">

        </div>

      </div>
      <div class="banner">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
         </van-swipe>
      </div>
    <div class="nav">
        <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
/>
    </div>
    <div class="tou">
     <p class="le"> <span class="l">|</span>资深讲师</p>
      <span class="r">全部<van-icon name="arrow"/></span>
    </div>
    <div class="teach" v-for="(item,index) in data " :key="index">
          <div class="top">
             
          </div>
        <ul >
          <li class="one">
            <img :src="item.teacher_avatar" alt="">
          </li>
          <li class="two">
            <p class="o">{{item.teacher_name}}</p>
            <p class="t">{{item.introduction}}</p>
          </li>
        </ul>
    </div>


     <div class="conent">
     <p class="le"> <span class="l">|</span>推荐课程</p>
      <span class="r">更新<van-icon name="arrow"/></span>
    </div>
    <div class="teach" v-for="(item,index) in list " :key="index">
          <div class="top">
             
          </div>
        <ul >
          <li class="one">
            <img :src="item.cover_img" alt="">
          </li>
          <li class="two">
            <p class="top">{{item.title}}</p>
            <p class="but"><span class="left">{{item.sales_num}}人报名</span><span class="right">{{item.sales_base}}￥</span></p>
          </li>
        </ul>
    </div>


     <div class="tou">
     <p class="le"> <span class="l">|</span>名师</p>
      <span class="r">全部<van-icon name="arrow"/></span>
    </div>
    <div class="teach" v-for="(item,index) in data " :key="index">
          <div class="top">
             
          </div>
        <ul >
          <li class="one">
            <img :src="item.teacher_avatar" alt="">
          </li>
          <li class="two">
            <p class="o">{{item.teacher_name}}</p>
            <p class="t">{{item.introduction}}</p>
          </li>
        </ul>
    </div>

  </div>
</template>

<script>


export default {
  data(){
    return{
   
          banner:'',
          data:[],
          list:[]

    }
    
    
    },
     created(){
        this.gitbanner()
      },
     methods:{
       async gitbanner(){
         let res = await this.$axios.get('/recommend/appIndex')
         console.log(res.data.data[1].list)
         this.data=res.data.data[0].list
         this.list=res.data.data[1].list
        },


     
    },

    
    


}
</script>




<style lang="scss">

  *{
    padding: 0px;
  }

    .home{
      width: 100%;
      margin-bottom:100px;

    .head{
      width: 100%;
      height: 130px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      

      .left{
        width: 100px;
        height: 100%;
        
      }
      .cont{
        width: 800px;
        height: 85px;

        .search{
          width: 100%;
          height: 100%;
          border-radius:50px; 
          border: none;
          font-size: 40px;
          padding: 0 6px;
          border: 1px solid #cccccc;
        }

      }

      .right{
        width: 100px;
        height: 100%;
       
      }

    }

    .banner{
      width: 100%;

    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 100px;
    line-height: 500px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
    height: 500px;
  }
    }

  .nav{
    width: 100%;
    height: 200px;
    background-color: antiquewhite;
  }

  .tou{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

      .le{
        font-size: 50px;
        margin-left: 10px;
      }
    .l{
      font-size: 50px;
      color: red;
       margin-left: 10px;
    }  

    
    .r{
      font-size: 50px;
    }  

  }

    .conent{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

   





      .le{
        font-size: 50px;
        margin-left: 10px;
      }
    .l{
      font-size: 50px;
      color: red;
       margin-left: 10px;
    }  

    
    .r{
      font-size: 50px;
    }  

  }


    
    .teach{
      width: 100%;
      height: 200px;
      margin-top: 60px;
      
      
      ul{
        width: 90%;
        height: 100%;
        display: flex;
        margin: 0 auto;
        border-color: #cccccc;


        .one{
          width: 20%;
          height: 100%;
         

          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .two{
          width: 80%;
          height: 100%;
          margin-left:20px; 

         .top{
           font-size: 40px;
           margin-top:20px; 
          }
        .but{
          margin-top: 85px;
          display: flex;
          justify-content: space-between;
          .left{
            font-size: 30px
          }
          .right{
            font-size: 30px
          }
         }



          .o{
            font-size: 35px;
            margin-left: 20px;
            margin-top:30px;
          }
          .t{
            font-size: 35px;
            margin-top:40px; 
            margin-left: 20px;
            color: #cccccc;
            
          }
        }
      }
    }


    }
</style>

