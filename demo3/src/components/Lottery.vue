<template>
    <div class="lottery">
        <div class="header">
            <button 
            id="luck" 
            @click="lottery()" 
            :disabled="disabled || !times ? true : false" 
            :class="{'disabled': disabled || !times ? true : false}">
            <strong>点击抽奖</strong></button>
        </div>
        <ul class="flex">
            <li 
            v-for="(item, index) in amount" 
            :class="{'active': index === actvieIndex}">
            <span>{{item.value}}</span></li>
        </ul>
        <div class="content" v-if="!isShow">
            <p>还剩 {{times}} 次抽奖机会！</p>
            <ul class="finished" v-for="(item, index) in list">
                <li>第{{index + 1}}次抽到 {{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lottery',
        data() {
            return {
                actvieIndex: -1,
                isShow: true,
                disabled: false,
                times: 9,
                list: [],  
                amount: [
                    {value: '1 元'},
                    {value: '2 元'},
                    {value: '3 元'},
                    {value: '4 元'},
                    {value: '5 元'},
                    {value: '6 元'},
                    {value: '7 元'},
                    {value: '8 元'},
                    {value: '9 元'}
                ]
            }
        },
        methods: {
            init(seconds) {
                this.isShow = false 

                let timer = setInterval(() => {
                    this.actvieIndex ++
                    if(this.actvieIndex >= this.amount.length ) {
                        this.actvieIndex = 0;
                    }
                }, 100)
                
                setTimeout(() => {
                    this.disabled = false

                    clearInterval(timer)

                    while(this.list.includes(this.amount[this.actvieIndex].value)){
                        this.actvieIndex = Math.floor(Math.random() * 9)
                    }

                    if(this.actvieIndex >= 0){
                        this.list.push(this.amount[this.actvieIndex].value)
                    }
                }, seconds * 1000)

                this.disabled = true  
            },
            lottery () {
                if(this.times > 0){
                    this.init(2)
                    this.times--
                    this.actvieIndex = Math.floor(Math.random() * 9)
                }
            }
        }
    }
</script>

<style lang="scss">
    $background: #FFD54F;
    $text: #fff;
    $hover: #D2A413;

    .header{
        width: 100px;
        height: 50px;
        margin: 20px auto;
        #luck{
            width: 100%;
            height: 100%;
            border-style: none;
            outline: none;
            color: $text;
            background: $background;
            letter-spacing: 1px;
            cursor: pointer;
            &:hover{
                background: $hover;
            }
        }
        .disabled{
            background: $hover !important;
        }
    }
    
    .flex{
        display: flex;
        -webkit-justify-content: center; 
        justify-content: center;
        li{
            list-style: none;
            margin: 10px;
            width: 100px;
            height: 100px;
            background: $background;
            border: 1px solid $background;
            border-radius: 2px;
            box-shadow: 2px 2px 2px #ccc;
            span{
                display: block;
                width: 60px;
                height: 60px;
                margin: 15px auto;
                background: $text;
                border: 1px solid $text;
                border-radius: 50%;
                text-align: center;
                line-height: 60px;
                font-weight: bold;
                color: $background;
            }
        }
        .active{
            background: $text;
            border: 1px solid $text;
            border-radius: 2px;
            box-shadow: 2px 2px 2px #ccc;
            span{
                background: $background;
                border: 1px solid $background;
                color: $text;
            }
        }
    }
    
    .content{
        p{
            line-height: 60px;
        }
        .finished{
            li{
                list-style: none;
                margin: 10px;
            }
        }
    }
</style>
