<template>
  <input v-bind="props" :class="['ma-input', props.class]" />
</template>

<script setup lang="ts">
const props: any = defineProps([]);
</script>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.ma-input {
  padding: functions.toRem(16);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  /* identical to box height, or 150% */

  /* neutral/600 */

  color: #424242;
  border: 1px solid #e0e0e0;
  border-radius: functions.toRem(8);

  &::placeholder {
    color: #9e9e9e;
  }

  &[datagroup] {
    border: none;
  }
}
</style>
