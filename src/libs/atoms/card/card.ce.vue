<template>
  <section class="card">
    <div class="card__header">
      <slot name="header" />
    </div>
    <slot />
  </section>
</template>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.card {
  border: 1px solid colors.$normal-7;
  border-radius: functions.toRem(8);
  padding: functions.toRem(24);

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: functions.toRem(24);
    position: relative;

    ::before {
      content: '';
      position: absolute;
      width: functions.toRem(3);
      height: functions.toRem(18);
      background-color: #323c9f;
      left: functions.toRem(-25);
      top: functions.toRem(3.5);
    }

    ::slotted(span) {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #323c9f;
    }
  }
}
</style>
