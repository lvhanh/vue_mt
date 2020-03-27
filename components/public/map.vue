<template>
    <div id="container"></div>
</template>

<script>
export default {
    data(){
        return {
            key : '77902b7a91084a40dd6676daa90f38fa'
        }
    },
    props : {
        point : {
            type : Array,
            default : []
        }
    },
    mounted : function(){
        console.log(this.point)
        let _this = this
        window.loadMap = function(){
            var map = new window.AMap.Map('container',{
                resizeEnable : true,
                zoom : 10,
                center: _this.point
            })
            window.Amap.plugin(['Amap.ToolBar'],function(){
                map.addControl(new window.Amap.ToolBar())
                for(let i=0;i<_this.point.length;i++){
                    var marker = []
                    marker[i] = new window.Amap.Marker({
                        position : _this.point[i].location,
                        icon : 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png'
                    })
                    var markerList = []
                    markerList.push(marker[i])
                }
                _this.map.add(markerList)
            })
        }
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${_this.key}&callback=loadMap`
        var jsapi = document.createElement('script')
        jsapi.charset = 'utf-8'
        jsapi.scr = url
        document.head.appendChild(jsapi)
    }
}
</script>

<style>

</style>