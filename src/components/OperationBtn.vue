<script setup lang="ts">
const modelValue = defineModel<'+' | '-' | '*' | '/'>()
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-5">
        <div class="card-body">
          <div class="operationBtn">
            <!--card resultado-->
            <div class="operationBtn-card">
              <h2 class="text-center">Escolha uma operação</h2>
              <select class="form-select operationBtn-select" v-model="modelValue">
                <option value="+">Soma ➕</option>
                <option value="-">Subtração ➖</option>
                <option value="*">Multiplicação ✖️</option>
                <option value="/">Divisão➗</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use '@/assets/styles/variables' as vars;

h2 {
  font-size: 1.2rem;
  font-weight: 500;
  color: vars.$sala-calculo-5;
}

select {
  border-radius: vars.$radius;
  border: 1px solid color.adjust(vars.$sala-calculo-5, vars.$lightness: 30%);
  cursor: pointer;

  &:focus {
    border-color: vars.$sala-calculo-4;
    box-shadow: 0 0 0 3px rgba(vars.$sala-calculo-4, 0.25);
  }
}
</style>
