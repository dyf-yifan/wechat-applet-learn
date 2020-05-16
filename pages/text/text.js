const texts = [
    '2011年1月，微信1.0发布',
    '同年5月，微信2.0语音对讲发布',
    '10月，微信3.0新增摇一摇功能',
    '2012年3月，微信用户突破1亿',
    '4月份，微信4.0朋友圈发布',
    '同年7月，微信4.2发布公众平台',
    '2013年8月，微信5.0发布微信支付',
    '2014年9月，企业号发布',
    '同月，发布微信卡包',
    '2015年1月，微信第一条朋友圈广告',
    '2016年1月，企业微信发布',
    '2017年1月，小程序发布',
    '......'
]

Page({
    onShareAppMessage() {
        return {
            title: 'text',
            path: 'page/component/pages/text/text'
        }
    },

    data: {
        text: '',
        canAdd: true,
        canRemove: false,
        texts: [{
                id: 1,
                name: "文艺",
                content: "酒醒只在花前坐，酒醉还来花下眠；半醒半醉日复日，花落花开年复年。"
            },
            {
                id: 2,
                name: "唯美",
                content: "满载青春的时光，怎么说忘就忘了,那一段记不起的小时光。"
            },
            {
                id: 3,
                name: "清新",
                content: "如果抓不住旧时光的影子，我们就可以微笑的看着往昔。"
            },
            {
                id: 4,
                name: "主流",
                content: "等待是白色的烟雾般飘散在记忆的最深处。"
            },
            {
                id: 5,
                name: "复古",
                content: "天边的烟云抹去了淡淡的忧伤，或许我该学会调和等待与惆怅。"
            },
            {
                id: 6,
                name: "情感",
                content: "当记忆的线缠绕过往支离破碎慌乱占据了心扉。"
            }
        ]
    },
    extraLine: [],

    add() {
        this.extraLine.push(texts[this.extraLine.length % 12])
        this.setData({
            text: this.extraLine.join('\n'),
            canAdd: this.extraLine.length < 12,
            canRemove: this.extraLine.length > 0
        })
        setTimeout(() => {
            this.setData({
                scrollTop: 99999
            })
        }, 0)
    },
    remove() {
        if (this.extraLine.length > 0) {
            this.extraLine.pop()
            this.setData({
                text: this.extraLine.join('\n'),
                canAdd: this.extraLine.length < 12,
                canRemove: this.extraLine.length > 0,
            })
        }
        setTimeout(() => {
            this.setData({
                scrollTop: 99999
            })
        }, 0)
    },
    onMyEvent: function (e) {
        console.log("text:" + JSON.stringify(e.currentTarget.dataset.item))
        wx.navigateTo({
            url: '/pages/index_detail/index_detail?item=' + JSON.stringify(e.currentTarget.dataset.item)
        })
    }
})