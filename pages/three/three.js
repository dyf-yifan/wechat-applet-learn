Component({
  properties: {
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
    }
  }
})