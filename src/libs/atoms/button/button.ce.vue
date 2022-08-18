<template>
  <button :type="type" :class="classes" :disabled="disabled || isLoading">
    <span v-if="showIconSlot && !isLoading" class="btn-icon">
      <slot name="icon" />
    </span>

    <span v-if="showSlot && !isLoading" ref="slot" class="btn-text">
      <slot></slot>
    </span>

    <ma-spinner v-if="isLoading" :variant="spinnerVariant" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

//accepted props
const props = defineProps({
  outline: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  type: {
    validator: (value: string) => {
      return ['button', 'submit', 'reset'].includes(value);
    },
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
});

//local variable
const showSlot = ref(true);
const showIconSlot = ref(false);

//computed variables
const classes = computed(() => [
  'btn',
  {
    'btn-outline': props.outline,
    'btn-rounded': props.rounded,
    'btn-fullwidth': props.expanded,
    'btn-icon': showIconSlot,
    loading: props.isLoading != null && props.isLoading,
  },
]);

const spinnerVariant = computed(() =>
  props.outline ? 'primary' : 'secondary'
);

//methods
//define emit
const emit = defineEmits(['click']);

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.btn {
  margin: 4px;
  min-width: 100px;
  min-height: 48px;
  max-height: 48px;
  padding: 0.75rem 1rem;
  display: inline-block;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  background: colors.$primary-1;
  color: var(--color-white-50);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 480px) {
    min-height: 40px;
    max-height: 40px;
  }
  &.btn-outline {
    background-color: var(--color-white-50);
    color: var(--color-primary);
    &:active {
      background-color: var(--color-primary-lightest);
    }
  }
  &.btn-rounded {
    border-radius: 999px;
  }
  &.btn-fullwidth {
    width: 100%; // type block
  }
  &.btn-icon {
    min-width: 125px;
  }
  &:active {
    background-color: var(--color-primary-dark);
  }
  &:hover {
    box-shadow: var(--shadow-primary-highlight);
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .btn-icon {
    margin-right: 0.5rem;
  }
}
</style>
