// pages/map/map.js
let schoolData = require('../../resources/gis-school')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   centerX:113.3245211,
   centerY:23.10229,
   markers:[],
   controls:[{
     id:1,
     iconPath:'/image/location-control.png',
     position:{
       left:0,
       top:0,
       width:40,
       height:40
     },
     clickable:true
   }]
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  console.log('地图定位!')
  let that = this
  wx.getLocation({
    type:'gcj02',
    success: function(res) {
      console.log(res)
      let latitude = res.latitude;
      let longitude = res.longitude;
      let marker = this.createMarker(res);
      this.setData({
        centerX:longitude,
        conterY:latitude,
        markers:this.getSchoolMarkers()
      })
    },
  })
  },
  regionchange(e){
    console.log(e.type)
  },
  markertap(e){
    console.log(e)
  },
  controltap(e){
    console.log(e.controlId)
    this.moveToLocation()
  },
  getSchoolMarkers(){
    let markers=[]
    for(let item of schoolData){
      let marker = this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },
  moveToLocation:function(){
    this.mapCtx.moveToLocation()
  },
  createMarker(point){
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath:"/image/location.png",
      id:point.id||0,
      name:point.name||'',
      latitude:latitude,
      longitude:longitude,
      width:25,
      height:48
    };
    return markder;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})