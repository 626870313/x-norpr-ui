# Icon 图标

z-ui 推荐使用 xicons 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用,你需要全局注册组件,才能够直接在项目里使用。

<script setup lang='ts'>
import { ApertureOutline } from '@vicons/ionicons5'
</script>
<z-icon color="red" size="40">
  <ApertureOutline />
</z-icon>

<z-icon color="green" size="40">
  <ApertureOutline />
</z-icon>

<z-icon color="blue" size="40">
  <ApertureOutline />
</z-icon>

<div>
<z-icon color="red" size="60">
  <ApertureOutline />
</z-icon>

<z-icon color="green" size="60">
  <ApertureOutline />
</z-icon>

<z-icon color="blue" size="60">
  <ApertureOutline />
</z-icon>
</div>

```vue
<script setup lang="ts">
import { ApertureOutline } from '@vicons/ionicons5'
</script>

<template>
  <z-icon color="red" size="40">
    <ApertureOutline />
  </z-icon>
</template>
```

### API

### Icon Props

| 名称  | 类型   | 默认值 | 说明                           |
| ----- | ------ | ------ | ------------------------------ |
| name  | String | 无     | 图标名称，用于指定图标类型     |
| color | String | 无     | 图标颜色                       |
| size  | String | 无     | 图标尺寸，例如 '16px' 或 '1em' |
