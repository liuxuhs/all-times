.<template>
    <div class="box">
        <div class="box-s">
            <div class="head">
                <img :src="data.cover_img" alt="">
            </div>
            <div class="nav">
                <p class="top">{{data.title}}</p>
                <p class="cont">共{{data.is_free}}节课 | {{data.sales_num}}人已经报名</p>
                <p class="but">开课时间{{data.start_play_year}}/07/08:00:00-{{data.start_play_year}}/07/09 00:00</p>
                <p class="mf">免费</p>
            </div>
            <div class="conent">
               <div class="left">
                   <span class="one">服务:</span>
                   <span class="two">课程售后</span>
               </div>
               <p>详情<van-icon name="arrow"  class="ic" size=10px /></p>
            </div>

            <div class="tim">
                <p class="title">教学团队</p>
                <ul>
                    <li v-for="(item,index) in datas" :key="index">
                        <img :src="item.teacher_avatar" alt="">
                        <p>{{item.teacher_name}}</p>
                    </li>
                </ul>
            </div>

            <div class="foot">
                <van-tabs v-model="activeName">
                <van-tab title="课程介绍" name="a"></van-tab>
                <van-tab title="课程大纲" name="b"></van-tab>
                <van-tab title="课程评价" name="c"></van-tab>
            </van-tabs>
            </div>

            <div class="js">
                <p class="title">
                    课程介绍:
                </p>
                <div v-html="data.course_details" class="cont">

                </div>
            </div>

            <div class="dg">
                 <p class="title">
                    课程大纲:
                </p>
                <van-collapse v-model="activeNames">
                <van-collapse-item title="1、隐身术" name="1">
                    <p class="one"><span>·</span>隐身术</p>
                    <p class="two">所有的老师都会</p>
                </van-collapse-item>
                </van-collapse>
            </div>

            <div class="pl">
                <van-empty description="暂无评论" />
            </div>

            <div class="ft">
                <van-button type="danger" class="but">开始报名</van-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            li_id:0,
            data:[],
            datas:[],
            activeName: 'a',
            activeNames: ['1'],
        }
    },


    created(){
        this.li_id=this.$route.query.id
        this.getdata()
    },

    methods:{
      async  getdata(){
            console.log(this.li_id)
            let res = await this.$axios.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+this.li_id+'?')
            console.log(res.data)
            this.data=res.data.data.info
            this.datas=res.data.data.teachers

            
        }
    }
}
</script>

<style lang = 'scss'>
    body{
        background-color: #f0f2f5;
    }
    .box{
        width: 375px;
        .box-s{
            width: 375px;

            .head{
                width: 100%;
                height: 5.86667rem;
                background-color: #f0f2f5;

                img{
                    width: 60%;
                    height: 100%;
                }
            }
            .nav{
                width: 100%;
                height: 130px;
                background-color: white;
              

                .top{
                    font-size: 18px;
                    margin-top: 10px;
                    padding-left:10px; 
                    padding-top:10px; 
                }
                .cont{
                    font-size: 13px;
                   color: rgba(0,0,0,.45);
                    padding-left:10px; 
                    margin-top: 10px;
                    
                }
                .but{
                    font-size: 13px;
                   color: rgba(0,0,0,.45);
                   margin-top: 10px;
                   padding-left:10px; 
                   
                }
                .mf{
                    font-size: 18px;
                    color: red;
                    margin-top: 10px;
                    padding-left:10px; 
                    
                }
            }
            .conent{
                width: 100%;
                height: 35px;
                background-color: white;
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left{
                    width: 25%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-left: 5px;

                    .one{
                        font-size: 10px;
                        color: rgba(0,0,0,.45);
                    }
                    .two{
                        font-size: 12px;
                    }

                   
                }
                 p{
                        font-size: 12px;
    
                    }
            }
            .tim{
                width: 100%;
                height: 130px;
                margin-top: 20px;
                background-color: white;

                .title{
                    font-size: 15px;
                }

                ul{
                    width: 100%;
                    height: 71%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    li{
                        width: 23%;
                        /* height: 100%; */
                        text-align: center;
                        img{
                            width:50px;
                            height: 50px;
                            border-radius: 50px;
                        }
                        
                        p{
                            margin-top: 10px;
                        }
                        
                    }
                }
            }
            .foot{
                width: 100%;
                height: 50px;
                margin-top: 20px;
                background-color: white;
                line-height: 50px;
            }
            .js{
                width: 100%;
                height: 80px;
                background-color: white;
                border-top: 0.9px solid #f0f2f5;
                
                

                .title{
                    font-size: 15px;
                    margin-top: 10px;
                }
                .cont{
                    margin-top: 10px;
                    font-size: 10px;
                    margin-left: 5px;
                    
                }
            }
            .dg{
                width: 100%;
                height: 80px;
                background-color: white;
                margin-top: 20px;


                .title{
                    font-size: 15px;
                }
                .one{
                    font-size: 8px;
                }
                .two{
                    font-size: 8px;
                    span{
                        color: red;
                    }
                }
            }
            .pl{
                width: 100%;
                height: 300px;
                background-color: white;
                margin-top: 20px;
            }
            .ft{
                width: 100%;
                height: 30px;
                text-align: center;
                background-color: white;
                position: fixed;
                left: 0;
                right: 0;
                bottom: 0;
                
                
                .but{
                    width: 80%;
                    height: 100%;
                    border-radius: 30px;
                    
                }
            }

        }
    }
</style>
