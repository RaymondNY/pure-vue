<template>
  <div class="nav-header">
    <el-icon class="myicon">
      <template v-if="!isFold">
        <fold class="fold-menu" @click="handleFoldClick" />
      </template>
      <template v-else>
        <expand class="expand-menu" @click="handleFoldClick" />
      </template>
    </el-icon>
    <div class="content">
      <div>面包屑1</div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons'
import UserInfo from './user-info.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    UserInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
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
  display: flex;
  width: 100%;
  .myicon {
    padding: 0 0 15px;
  }
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .expand-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 30px;
  }
}
</style>
