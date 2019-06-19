<template>
    <footer>
        <div class="bacg" v-show="!showBottom">
            <img src="../assets/images/shouye/bg-4.jpg" alt="" srcset="">
        </div>
        <div class="fotbox">
            <div class="titlebox">
                <h1>我们期待 <span>您的来电</span></h1>
                <span class="list"></span>
               <p>舍 南 科 技 有 限 公 司</p>
            </div>
            <div class="botmbox">
                <div class="fl form">
                    <form>
                        <div class="neibox">
                            <input type="text" class="conform" placeholder="您的姓名">
                            <input type="text" class="conform1" placeholder="您的电话">
                            <textarea class='textcon'  rows="5" placeholder="留言给我们"></textarea>
                            <div class="sumbox">
                                <input class="sum" type="submit" value="提交给我们">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="fr address">
                    <p><span><em class="fa"></em>  |  北京市海淀区中裕世纪商务楼</span></p>
                    <p><span><em class="fa"></em>  |  400-9010-302 / 13436911353</span></p>
                    <p><span><em class="fa"></em>  |  shenanwangluo@163.com</span></p>
                    <p><span><em class="fa"></em>  |  www.snnz.net</span></p>
                </div>
            </div>
        </div>
        <div class="btomcom">
            <p>Copyright 2006 - 2015 舍南科技版权所有 京ICP备11018696号-1 用心做好每一个网站！</p>
        </div>
    </footer>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['showBottom'])
    },
}
</script>
<style lang="less" scoped>
.bacg{
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: -1;
    img{
        width: 100%;
    }
}
.fotbox{
    width: 89%;
    padding: 90px 0;
    margin: 0 auto;
    // background: pink;
    overflow: hidden;
    .titlebox{
        text-align: center;
        margin: 50px auto 35px;
        line-height: .8;
        h1{
            font-size: 28px;
            font-family: YOUROOKMARBELOUS_0;
            color: #0098e1;
            span{
                color: #ffa200;
            }
        }
        .list{
            height: 1px;
            background: #fff;
            width: 120px;
            display: inline-block;
        }
        p{
            color: #eceff3;
            font-size: 18px;
            letter-spacing: .5px;
            line-height: 36px;
            font-family: 'Raleway',Arial, Helvetica, sans-serif;
        }
    }
    .botmbox{
        overflow: hidden;
        .fl{
            float: left;
            .neibox{
                width: 430px;
                padding: 0 20px;
                // background: pink;
                input{
                    padding: 5px;
                    background: none;
                    border: 1px solid #fff;
                    height: 40px;
                    line-height: 40px;
                    color: #fff;
                    font: 12px "微软雅黑";
                    outline: none;

                }
                .conform{
                    width: 390px;
                    margin-bottom: 10px;
                }
                .conform1{
                     width: 390px;
                }
                .textcon{
                    padding: 5px;
                    background: none;
                    color: #fff;
                    width: 100%;
                    margin: 20px 0;
                    border: 1px solid #fff;
                    font: 12px "微软雅黑";
                    outline: none;
                    resize:none;
                }
                .sumbox{
                    width: 100%;
                    overflow: hidden;
                }
                .sum{
                    width: 30%;
                    height: 40px;
                    line-height: 40px;
                    padding: 0;
                    float: left;
                }
                .sum:hover{
                    background: #fff;
                    color: #000;
                }
            }
        }
        .fr{
            float:right;
            width: 350px;
            span{
                line-height: 35px;
                display: block;
                font-size: 16px;
                padding-bottom: 10px;
                margin-bottom: 10px;
                font-weight: 300;
                color: #fff;
                text-align: left;
                .fa{
                    font-size: 28px;
                    display: inline-block;
                    font-family: FontAwesome;
                    font-style: normal;
                    font-weight: normal;
                    line-height: 1;

                        font-size: 1.33333333em;
                    vertical-align: -15%;
                }
                .fa:before {
                    content: "\f0ac";
                }
            }
        }
    }
}
.btomcom{
    background-color: #111;
    padding: 80px 0;
    color: #ccc;
}

</style>

