<script setup lang="ts">
  defineProps<{
    result: number | null
  }>()
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-5">
        <div class="card-body">
          <main>
            <div class="result-card">
              <h2 class="text-center">Resultado: {{ result ?? '-' }}</h2>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

.result-card {
  background: vars.$sala-calculo-3;
  color: vars.$sala-calculo-2;
  padding: 1.5rem;
  border-radius: vars.$radius;
  text-align: center;

  h2 {
    margin: 0;
    font-weight: 600;
  }
}
</style>

