<template>
<section>
    <el-select v-model="value" placeholder="Budget">
          <input type="text" id="username" name="username">
    <!-- <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option> -->
    </el-select>
    <el-select v-model="value" placeholder="Delivery Time">
    <!-- <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option> -->
    </el-select>
  </section>
</template>

<script>
export default {

}
</script>
