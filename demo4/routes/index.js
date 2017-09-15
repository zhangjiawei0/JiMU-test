var express = require('express');
var router = express.Router();
var swig = require('swig');
var stylus  = require('stylus');

var str = require('fs').readFileSync('./public/stylesheets/style.styl','utf-8');


router.get('/',function(req, res){
    var template = swig.compileFile( './views/index.html');

    var data = {
        title: '关于盒子',
        logo: '/images/jimu_logo-42df8848d5.png',
        features_title: '为什么选择积木盒子',
        choice_title: '发展历程',
        history_title: '积木盒子的故事',
        intro: [
            {
                info: '基于我们的使命和定位，2015年12月，积木盒子推出了新的logo与域名jimu.com'
            },
            {
                info: '新的标志传达了积木全员希望为用户带来的服务体验'
            }
        ],

        fetures:[
            {
                'url':'/images/safe-90bd0b7f6e.png',
                'title':'安全保障',
                'details':[
                    '第三方担保、保证金',
                    '风险互助金、法律援助金',
                    '多重安全防线',
                    '为投资者提供保障'
                ]
            },
            {
                'url':'/images/property-a7ddbe187f.png',
                'title':'合规透明',
                'details':[
                    '交易资金由民生银行全程',
                    '存管，资金流转清晰',
                    '可查，交易真实、合法',
                    '让投资者安心'
                ]
            },
            {
                'url':'/images/service-7612927c13.png',
                'title':'贴心服务',
                'details':[
                    '积木盒子只做一件事',
                    '为投融双方倾力服务',
                    '积木盒子全员参与',
                    '为您提供一站式服务'
                ]
            },
            {
                'url':'/images/choice-d7f4da06ec.png',
                'title':'丰富选择',
                'details':[
                    '我们为您提供',
                    '多期限、多地域、多行业',
                    '多种形式的投资项目',
                    '总有一款适合您'
                ]
            }
        ],
        choice:[
            {
                'year':'2016',
                'lists':[
                    {
                        'month':'9月',
                        'info':'积木盒子成为积木拼图集团旗下网络借贷平台'
                    },
                    {
                        'month':'9月',
                        'info':'在多条业务线坚实的基础上，微金融服务集团积木拼图正式成立'
                    }
                ]
            },
            {
                'year':'2015',
                'lists':[
                    {
                        'month':'7月',
                        'info':'正式切换至民生银行 盒子树立P2P资金存管新标杆'
                    },
                    {
                        'month':'4月',
                        'info':'英国天达集团领投 盒子完成C轮融资共8400万美元'
                    },
                    {
                        'month':'2月',
                        'info':'盒子交易额突破50亿元'
                    }
                ]
            },
            {
                'year':'2014',
                'lists':[
                    {
                        'month':'11月',
                        'info':'盒子交易额突破30亿元'
                    },
                    {
                        'month':'10月',
                        'info':'盒子启动“寒门学子项目”'
                    },
                    {
                        'month':'9月',
                        'info':'小米顺为领投3719万美元，盒子完成B轮融资'
                    },
                    {
                        'month':'7月',
                        'info':'盒子与第三方法律服务商绿狗网进行证据存管，降低投资风险'
                    },
                    {
                        'month':'6月',
                        'info':'盒子推实名制项目，公开监管制度更加完善'
                    },
                    {
                        'month':'5月',
                        'info':'盒子的交易额突破10亿元'
                    },
                    {
                        'month':'2月',
                        'info':'来自欧洲的Ventech投资千万美元'
                    }
                ]
            },
            {
                'year':'2013年及以前',
                'lists':[
                    {
                        'month':'2013年12月',
                        'info':'交易额突破1亿元'
                    },
                    {
                        'month':'2013年8月',
                        'info':'踩着76hui的肩膀，积木盒子闪亮登场'
                    },
                    {
                        'month':'2012年7月',
                        'info':'专注尽职调查数据服务的平台76hui上线'
                    },
                    {
                        'month':'2012年3月',
                        'info':'来自金融与互联网的好积友开始了跨界创业之旅'
                    }
                ]
            }
        ],
        history:[
            {
                'url':'/images/simple-e180a19622.png',
                'title':'简洁活跃',
                'details':[
                    '从积木的基本造型出发',
                    '一切可能性都来自于用户对于我们的期许',
                    '和丰富的想象力'
                ]
            },
            {
                'url':'/images/colorful-12fdb10394.png',
                'title':'色彩缤纷',
                'details':[
                    '在这里只有缤纷和欢乐',
                    '理财也可以丰富多彩的',
                ]
            },
            {
                'url':'/images/smart-5bfac98ebe.png',
                'title':'智能搭配',
                'details':[
                    '所有的色彩和造型都来自于合理的',
                    '布局和规划。欢乐的背后',
                    '是专业和严谨的计算',
                    '自由和想象，是基于细节完美的处理。'
                ]
            }
        ]
    };

    res.render('index', { data: data });
});

router.get('/public/stylesheets/style.css',function(req,res){
    stylus.render(str,function(err,css){
        if(err) throw err;
        res.end(css);
    })

})

module.exports = router;
