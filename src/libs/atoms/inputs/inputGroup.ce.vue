<template>
  <div class="ma-input-group">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.ma-input-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ::slotted(label) {
    display: flex;
    margin-bottom: functions.toRem(8) !important;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #424242;
    width: 100%;
  }

  ::slotted(:not(label)) {
    display: inline-flex;
    width: auto;
    flex-grow: 1;
    order: 2;
  }

  ::slotted([data-group='primary']) {
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  ::slotted([data-group='prepend']) {
    // margin-right: functions.toRem(8);
    display: inline-flex;
    width: min-content;
    flex-grow: 0;
    order: 1;
    border: 1px solid #e0e0e0;
    border-radius: 8px 0 0 8px;
  }

  ::slotted([data-group='append']) {
    // margin-right: functions.toRem(8);
    display: inline-flex;
    width: fit-content;
    flex-grow: 0;
    order: 3;
    border: 1px solid #e0e0e0;
    border-radius: 0 8px 8px 0;
  }

  ::slotted(*:last-child, :not(.ma-input)) {
    border-right: 1px solid #e0e0e0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  ::slotted(*:last-child[data-group='primary']) {
    border-right: 1px solid #e0e0e0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  ::slotted(*:nth-child(2), :not(.ma-input)) {
    border-left: 1px solid #e0e0e0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  ::slotted(*:nth-child(2)[data-group='primary']) {
    border-left: 1px solid #e0e0e0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>
