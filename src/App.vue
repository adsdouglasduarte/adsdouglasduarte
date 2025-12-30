<script setup lang="ts">
  import { ref, computed } from 'vue'

  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import InputsNumber from './components/InputsNumber.vue';
  import OperationBtn from './components/OperationBtn.vue';
  import Footer from './components/Footer.vue';

  const num1 = ref<number>(0)
  const num2 = ref<number>(0)
  const operation = ref<'+' | '-' | '*' | '/' >('+')

  const result = computed<number | null>(() => {
    switch (operation.value) {
      case '+':
        return num1.value + num2.value
      case '-':
        return num1.value - num2.value
      case '*':
        return num1.value * num2.value
      case '/':
        return num2.value !== 0 ? num1.value / num2.value : null
      default:
        return null
    }
  })

</script>


<template>
  <div class="container">
   <Header />
   <Main :result="result" />
    <InputsNumber v-model:num1="num1" v-model:num2="num2" />
    <OperationBtn v-model="operation" />
    <Footer />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as vars;

body {
  background: linear-gradient(
    135deg,
    vars.$sala-calculo-1,
    vars.$sala-calculo-3
  );
  font-family: 'Inter', system-ui, sans-serif;
}

.container {
  padding-bottom: 3rem;
}

.card {
  border: none;
  border-radius: vars.$radius;
  background-color: vars.$sala-calculo-2;
  box-shadow: vars.$shadow;
}
</style>

