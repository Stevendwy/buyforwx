// pages/location/location.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   markers:[{
     latitude:23.099994,
     longitude:113.324520,
     name:'I.T 创业园',
     desc:'我现在的位置'
   }],
   covers:[{
     latitude:23.099794,
     longitude:113.324520,
     iconPath:'../../images/wechart.png',
     rotate:10
    },{
      latitude:23.099298,
      longitude:113.324129,
      iconPath:'../../images/wechart.png',
      rotate:90
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('地图定位！')
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 1
        })
      }
    });
  },
})