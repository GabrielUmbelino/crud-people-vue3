<template>
  <ul class="steps is-narrow is-medium is-centered has-content-centered">
    <li class="steps-segment" :class="{ 'is-active': step === 'personal' }">
      <a href="#" class="has-text-dark">
        <span class="steps-marker">
          <font-awesome-icon icon="user-circle" />
        </span>
        <div class="steps-content">
          <p class="heading">Informações Pessoais</p>
        </div>
      </a>
    </li>
    <li
      class="steps-segment has-gaps"
      :class="{ 'is-active': step === 'address' }"
    >
      <span class="steps-marker">
        <font-awesome-icon icon="home" />
      </span>
      <div class="steps-content">
        <p class="heading">Endereços</p>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fas)

  export default defineComponent({
    components: {
      FontAwesomeIcon,
    },
    props: {
      step: {
        type: String,
        default: 'personal',
      },
    },
  })
</script>
<style lang="scss">
  @import '../node_modules/bulma-o-steps';

  .steps {
    max-width: 100%;
    margin: auto;
  }
</style>
