<template>
    <el-table
    :data="tableData"
    style="width: 100%">
        <el-table-column
        label="项目"
        width="600">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column
        label="单价"
        width="100">
            <template slot-scope="scope">
                <span>{{ scope.row.price }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
            <template slot-scope="scope">
                <el-input-number size="mini" v-model="scope.row.count"></el-input-number>
            </template>
        </el-table-column>
        <el-table-column label="总价" width="100">
            <template slot-scope="scope">
                <span>{{ scope.row.price*scope.row.count }}</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          name: '2016-05-02',
          price: 100,
          count: 1
        }]
      }
    }
}
</script>

<style>

</style>