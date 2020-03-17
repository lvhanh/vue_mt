<template>
    <div class="m-change">
        <div class="m-select">
            <mselect />
        </div>
        <div class="m-hot">
            <mhot />
        </div>
    </div>
</template>

<script>
import Mselect from '../components/changeCity/select'
import Mhot from '../components/changeCity/hot'
export default {
    components : {
        Mselect,
        Mhot
    }
}
</script>

<style lang="scss">
    @import '../assets/css/changeCity/index.scss'
</style>