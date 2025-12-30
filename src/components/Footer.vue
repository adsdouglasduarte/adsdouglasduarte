<script setup lang="ts"></script>

<template>
  <div class="row ">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-5">
        <footer>
          <!-- Aqui vai o rodapé -->
          <p class="text-center">
            &copy; 2025 Calculadora Aritmética. Todos os direitos reservados.<br />
          </p>
          <p class="dev text-center">
            Desenvolvido por:
            <a href="https://www.linkedin.com/in/ads-douglas-duarte/" target="_blank">
              Douglas Duarte
            </a>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

footer {
  color: vars.$sala-calculo-5;
  font-size: 0.9rem;

  a {
    color: vars.$sala-calculo-4;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
