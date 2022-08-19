<template>
  <div
    :class="['ma-dropdown', { 'ma-dropdown--open': isOpen }]"
    v-away="closeOptions"
  >
    <img
      :src="selected ? selected[asIcon] : ''"
      :alt="selected[label]"
      v-if="asIcon && selected"
      height="16"
      width="20"
    />
    <input
      type="text"
      class="ma-dropdown__input"
      :value="selectedText"
      @click="isOpen = !isOpen"
      @input="
        (e) => {
          inputSearch = (e.target! as any).value;
        }
      "
    />
    <Transition>
      <ul
        :class="[
          'ma-dropdown__list-wrapper',
          { 'ma-dropdown__list-wrapper--open': isOpen },
        ]"
        v-if="isOpen"
      >
        <li
          class="ma-dropdown__list-item"
          v-for="(opt, i) in optionProxy"
          :key="i"
          @click="selectOption(opt)"
        >
          <img
            :src="opt[asIcon]"
            :alt="opt[label]"
            v-if="asIcon"
            height="16"
            width="20"
          />
          {{ opt[label] }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const { options, code, label, asIcon }: any = defineProps([
  'options',
  'code',
  'label',
  'asIcon',
]);
//parse options in case value is a string
const parsedOptions = JSON.parse(options);

//reactive value to bind dropdown list
const isOpen = ref(false);

//reactive value to bind selected value
const selected = ref();

const selectedText = computed({
  get() {
    if (!selected.value) return '';
    return selected.value[code];
  },
  set(val: any) {
    selected.value = val || null;
  },
});

const selectOption = (opt: string) => {
  selectedText.value = opt;
  isOpen.value = false;
};

const inputSearch = ref('');

//proxy for option so it can be filtered
const optionProxy = computed(() => {
  if (!inputSearch.value) return parsedOptions;
  return parsedOptions.filter((opt: any) =>
    opt[label].toLowerCase().includes(inputSearch.value.toLowerCase())
  );
});

/**
 * create a custom directive to listen
 * if the user clicks outside of the component
 * while the dropdown is open, close the dropdown
 */
const vAway = {
  mounted(el: any, binding: any) {
    el.clickOutsideEvent = (event: any) => {
      if (!event.composedPath().includes(el)) {
        binding.value();
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  beforeUnmount(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
//binding function for v-away directive
const closeOptions = () => {
  isOpen.value = false;
};

/**
 * compute width of dropdown
 * based on the length of the longest option
 */
const elementWidth = computed(() => {
  const longest = parsedOptions.reduce((acc: string, curr: any) => {
    return curr[label].length > acc.length ? curr[label] : acc;
  }, '').length;
  if (asIcon) return longest + 1.5 + 'ch';
  return longest + 'ch';
});
</script>

<style lang="scss">
@use '../../../styles/global';
@use '../../../styles/functions';
@use '../../../styles/colors';

.v-enter-active,
.v-leave-active {
  transition: max-height 0.2s ease-in-out;
  overflow-y: hidden !important;
}

.v-enter-from,
.v-leave-to {
  max-height: 0 !important;
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}

.ma-dropdown {
  min-width: calc(v-bind(elementWidth) + functions.toRem(48) + 1ch);
  font-style: normal;
  font-weight: 500;
  font-size: functions.toRem(16);
  line-height: functions.toRem(24);
  width: 100%;
  color: #424242;
  border: 1px solid #e0e0e0;
  border-radius: functions.toRem(8);
  position: relative;
  padding: functions.toRem(16);

  //align icon and input
  display: flex;
  flex-direction: row;
  gap: functions.toRem(8);
  align-items: center;

  &:focus-within {
    outline: 1px auto colors.$primary-1 !important;
  }

  &::after {
    content: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2946 0.294459C10.9053 -0.0948134 10.2743 -0.0951574 9.88462 0.293691L6 4.16984L2.11538 0.29369C1.72569 -0.0951576 1.09466 -0.0948134 0.705384 0.294459C0.315811 0.684032 0.315811 1.31565 0.705384 1.70523L5.29289 6.29274C5.68342 6.68326 6.31658 6.68326 6.70711 6.29274L11.2946 1.70523C11.6842 1.31565 11.6842 0.684032 11.2946 0.294459Z' fill='%23424242'/%3E%3C/svg%3E");
    position: absolute;
    right: 16px;
    top: 14px;
    cursor: pointer;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  &--open {
    &::after {
      transform: rotate(180deg);
    }
  }

  &__input {
    border: none;
    width: 100%;
    border-radius: functions.toRem(8);

    &:read-only {
      cursor: pointer;
    }

    &:focus {
      outline-style: none;
    }

    &[datagroup] {
      border: none;
    }
  }

  &__list-wrapper {
    will-change: max-height;
    position: absolute;
    top: functions.toRem(62);
    left: 0;
    width: 100%;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: functions.toRem(8);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    max-height: functions.toRem(200);
    overflow-y: auto;
  }

  &__list-item {
    list-style: none;
    padding: functions.toRem(16);

    & + & {
      border-top: 1px solid #e0e0e0;
    }

    &:hover {
      background: #eef5ff;
      cursor: pointer;
    }
  }

  &[datagroup] {
    border: none;
  }
}
</style>
