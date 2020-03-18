<template>
    <div class="m-change">
        <div class="m-select">
            <mselect />
        </div>
        <div class="m-hot">
            <mhot />
        </div>
        <div class="m-catalogue">
            <mcatalogue />
        </div>
    </div>
</template>

<script>
import Mselect from '../components/changeCity/select'
import Mhot from '../components/changeCity/hot'
import Mcatalogue from '../components/changeCity/catalogue'
export default {
    components : {
        Mselect,
        Mhot,
        Mcatalogue
    }
}
</script>

<style lang="scss">
    @import '../assets/css/changeCity/index.scss'
</style>