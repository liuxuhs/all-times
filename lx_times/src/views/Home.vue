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

import {recommend} from '@/http/api.js'
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
         let res = await recommend()
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
      width: 375px;
      margin-bottom:100px;

    .head{
      width: 375px;
      height: 50px;
      background-color: aqua;
      display: flex;
      align-items: center;
      justify-content: space-between;
      

      .left{
        width: 100px;
        height: 100%;
        background-color: aquamarine;
      }
      .cont{
        width: 800px;
        height: 40px;

        .search{
          width: 100%;
          height: 100%;
          border-radius:50px; 
          border: none;
          font-size: 15px;
        }

      }

      .right{
        width: 100px;
        height: 100%;
        background-color: antiquewhite;
      }

    }

    .banner{
      width: 100%;

    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 100px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
    height: 200px;
  }
    }

  .nav{
    width: 100%;
    height: 200px;
    background-color: antiquewhite;
  }

  .tou{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

      .le{
        font-size: 20px;
        margin-left: 10px;
      }
    .l{
      font-size: 20px;
      color: red;
       margin-left: 10px;
    }  

    
    .r{
      font-size: 20px;
    }  

  }

    .conent{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

   





      .le{
        font-size: 20px;
        margin-left: 10px;
      }
    .l{
      font-size: 20px;
      color: red;
       margin-left: 10px;
    }  

    
    .r{
      font-size: 20px;
    }  

  }


    
    .teach{
      width: 100%;
      height: 100px;
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
           font-size: 20px;
           margin-top:20px; 
          }
        .but{
          margin-top: 35px;
          display: flex;
          justify-content: space-between;
          .left{
            font-size: 20px
          }
          .right{
            font-size: 20px
          }
         }



          .o{
            font-size: 25px;
            margin-left: 20px;
            margin-top:10px;
          }
          .t{
            font-size: 25px;
            margin-top:20px; 
            margin-left: 20px;
            color: #cccccc;
            
          }
        }
      }
    }


}
</style>

