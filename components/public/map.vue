<template>
    <div class="map">
        <div id="container"></div>
    </div>
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
        let _this = this
        window.loadMap = function(){
            var map = new window.AMap.Map('container',{
                resizeEnable : true,
                zoom : 12
            })
            var markers = _this.point.map(item=>{
                return {
                    icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                    position : item.split(',')
                }
            })
            markers.forEach(item=>{
                new AMap.Marker({
                    map : map,
                    icon: item.icon,
                    position: [item.position[0],item.position[1]],
                    offset: new AMap.Pixel(-13,30)
                })
            })
        }
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${_this.key}&callback=loadMap`
        var jsapi = document.createElement('script')
        jsapi.charset = 'utf-8'
        jsapi.src = url
        document.head.appendChild(jsapi)
    }
}
</script>

<style>

</style>