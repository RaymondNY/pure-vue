<template>
  <div class="nav-header">
    <el-icon size="30">
      <template v-if="isFold">
        <fold class="fold-menu" @click="handleFoldClick" />
      </template>
      <template v-else>
        <expand class="expand-menu" @click="handleFoldClick" />
      </template>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons'
export default defineComponent({
  components: {
    Fold,
    Expand
  },
  setup() {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .expand-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
