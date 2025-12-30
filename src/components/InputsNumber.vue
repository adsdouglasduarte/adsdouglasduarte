<script setup lang="ts">
const num1 = defineModel<number>('num1', { default: 0 })
const num2 = defineModel<number>('num2', { default: 0 })
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-5">
        <div class="card-body">
          <div class="inputs-number">
            <!--card resultado-->
            <div class="inputs-number-card">
              <div class="form">
                <div class="form-group">
                  <label for="numberInput">Insira um numero:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="numberInput"
                    placeholder="1,2,3..."
                    v-model.number="num1"
                  />
                </div>
                <div class="form-group">
                  <label for="stepInput">Insira um numero:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="stepInput"
                    placeholder="1,2,3..."
                    v-model.number="num2"
                  />
                </div>
              </div>
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

label {
  font-weight: 500;
  color: vars.$sala-calculo-5;
}

input {
  border-radius: vars.$radius;
  border: 1px solid color.adjust(vars.$sala-calculo-5, vars.$lightness: 30%);
  transition:
    border 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: vars.$sala-calculo-4;
    box-shadow: 0 0 0 3px rgba(vars.$sala-calculo-4, 0.25);
  }
}
</style>
