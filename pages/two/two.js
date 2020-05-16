Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 数据源
    content: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '我是用来接收父组件传过来的值' //默认值
    },

    // 或者可以写成
    content: String,
  },
  methods: {
    onTap: function (e) {
      //获取当前点击数据
      let currentVal = e.currentTarget.dataset.items;
      var myEventDetail = {
        currentData: currentVal
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('eventTap', myEventDetail, myEventOption)
    },
    executeTap: function (e) {
      console.log(e.detail.currentData);
    }
  }
})