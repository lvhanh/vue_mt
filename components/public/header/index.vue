<template>
	<div class="m-header">
		<el-row>
			<el-col>
				<top-bar/>
			</el-col>
		</el-row>
		<el-row>
			<el-col class="m-search">
				<search-bar/>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import TopBar from './topbar';
import SearchBar from './search';
export default {
	components:{
		TopBar,
		SearchBar
	}
}
</script>

<style lang="scss">
	@import '../../../assets/css/public/header/index.scss'
</style>