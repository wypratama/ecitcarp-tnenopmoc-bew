<template>
  <select v-bind="props" :class="['ma-input', props.class]">
    <option value="Tuan">Tuan</option>
    <option value="Tuan">Tuan</option>
    <option value="Tuan">Tuan</option>
  </select>
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

  &[datagroup] {
    border: none;
  }
}

select {
  // appearance: menulist !important;
  // -moz-appearance: menulist !important;
  // -webkit-appearance: menulist !important;
  // -o-appearance: menulist !important;
  // padding-right: 16px;
  background: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2946 0.294459C10.9053 -0.0948134 10.2743 -0.0951574 9.88462 0.293691L6 4.16984L2.11538 0.29369C1.72569 -0.0951576 1.09466 -0.0948134 0.705384 0.294459C0.315811 0.684032 0.315811 1.31565 0.705384 1.70523L5.29289 6.29274C5.68342 6.68326 6.31658 6.68326 6.70711 6.29274L11.2946 1.70523C11.6842 1.31565 11.6842 0.684032 11.2946 0.294459Z' fill='%23424242'/%3E%3C/svg%3E")
    no-repeat right;
  -webkit-appearance: none;
  background-position: right 16px center;
}
</style>
