<template>
  <div class="individual-person-register">
    <form>
      <IndividualForm
        v-if="currentStep === 0"
        :isFirstStep="isFirstStep"
        :isLastStep="isLastStep"
        :currentStep="currentStep"
        @onChangeStep="onChangeStep"
      />
      <Addresses
        v-if="currentStep === 1"
        :isFirstStep="isFirstStep"
        :isLastStep="isLastStep"
        :currentStep="currentStep"
        :loading="loading"
        @onChangeStep="onChangeStep"
        @onSubmit="onSubmit"
      />
    </form>
  </div>
</template>
<script lang="ts">
  import { useStore } from 'vuex'
  import { defineComponent, SetupContext } from 'vue'
  import { Addresses } from '../addresses'
  import { FormSteps } from '../form-steps'
  import { IndividualForm } from '../individual-form'

  export default defineComponent({
    components: {
      FormSteps,
      Addresses,
      IndividualForm,
    },
    props: {
      isFirstStep: Boolean,
      isLastStep: Boolean,
      loading: Boolean,
      currentStep: {
        type: Number,
        default: 0,
      },
    },
    setup(_props, context: SetupContext) {
      const store = useStore()

      const onChangeStep = (step: number) => {
        context.emit('onChangeStep', step)
      }

      const onSubmit = () => {
        context.emit('onSubmit', store.getters.person)
      }

      return {
        onSubmit,
        onChangeStep,
      }
    },
  })
</script>
<style lang="scss">
  .individual-person-register {
    form {
      width: $form-width;
      max-width: 100%;
      margin: 10px auto;
      padding: 0 15px;

      .step-navigation {
        padding: 60px 0 40px;
      }
    }
  }
</style>
