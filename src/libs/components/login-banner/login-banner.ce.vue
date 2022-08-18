<template>
  <div class="ma-banner-login">
    <div class="ma-banner-login__content">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.54872 0C5.19138 0 3.28204 1.79 3.28204 4C3.28204 6.21 5.19138 8 7.54872 8C9.90606 8 11.8154 6.21 11.8154 4C11.8154 1.79 9.90606 0 7.54872 0ZM9.68443 4C9.68443 2.89524 8.72952 2 7.55111 2C6.3727 2 5.41779 2.89524 5.41779 4C5.41779 5.10476 6.3727 6 7.55111 6C8.72952 6 9.68443 5.10476 9.68443 4ZM13.9489 12.9688C13.9489 12.3688 10.9387 11.0001 8.08228 11.0001C5.2259 11.0001 2.21564 12.3688 2.21564 12.9688V14H13.9489V12.9688ZM0.0818481 13C0.0818481 10.34 5.41185 9.00003 8.08185 9.00003C10.7518 9.00003 16.0818 10.34 16.0818 13V16H0.0818481V13Z"
          fill="#FEF058"
        />
      </svg>

      <div class="ma-banner-login__content-description">
        Mau lebih hemat? Jangan lupa log in, ya.
      </div>
    </div>
    <a :href="loginUrl">
      <button class="ma-banner-login__button" type="button">LOG IN</button>
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  loginUrl: {
    type: String,
    default: '/login',
  },
});
</script>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.ma-banner-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: functions.toRem(16) functions.toRem(24);
  background: colors.$primary-1;
  border-radius: functions.toRem(8);
  color: #fef058;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  &__button {
    padding: functions.toRem(6) functions.toRem(8);
    border-radius: functions.toRem(5);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #fdd835;
    background: linear-gradient(180deg, #4771ff 0%, #4b62dd 100%);
    display: inline-block;
    white-space: nowrap;
    border: 1px solid;
    border-image-source: linear-gradient(180deg, #2c3b7a 0%, #5c6bc0 100%);
    text-align: center;
    transition: 0.3s all ease;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
      cursor: pointer;
    }
  }
}
.ma-banner-login__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 0.875rem;
  }
  .ma-banner-login__content-description {
    color: #fef058;
    b {
      font-weight: 700;
    }
  }
}
</style>
