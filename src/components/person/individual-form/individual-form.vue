<template>
  <div class="individual-form">
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">CPF *</label>
          <div class="control">
            <input
              class="input"
              type="tel"
              :class="{ 'is-danger': v$.individual.cpf.$error }"
              v-mask="'###.###.###-##'"
              placeholder="CPF"
              v-model="state.individual.cpf"
              @blur="v$.individual.cpf.$touch()"
              @change="onChange"
            />

            <p
              class="help is-danger"
              v-for="error of v$.individual.cpf.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Sexo *</label>
          <div class="control">
            <div class="select">
              <select
                :class="{ 'is-danger': v$.individual.gender.$error }"
                v-model="state.individual.gender"
                @blur="v$.individual.gender.$touch()"
                @change="onChange"
              >
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>
            <p
              class="help is-danger"
              v-for="error of v$.individual.gender.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Data de Nascimento *</label>
          <div class="control">
            <input
              class="input"
              :class="{ 'is-danger': v$.individual.birthDate.$error }"
              type="tel"
              v-mask="'##/##/####'"
              placeholder="Data de Nascimento"
              v-model="state.individual.birthDate"
              @blur="v$.individual.birthDate.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.birthDate.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Nome *</label>
          <div class="control">
            <input
              class="input"
              :class="{ 'is-danger': v$.individual.name.$error }"
              type="text"
              placeholder="Nome"
              v-model="state.individual.name"
              @blur="v$.individual.name.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.name.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              :class="{ 'is-danger': v$.individual.email.$error }"
              type="text"
              placeholder="Email"
              v-model="state.individual.email"
              @blur="v$.individual.email.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.email.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Telefone</label>
          <div class="control">
            <input
              class="input"
              type="tel"
              :class="{ 'is-danger': v$.individual.phoneNumber.$error }"
              v-mask="['(##) ####-####', '(##) #####-####']"
              placeholder="Telefone"
              v-model="state.individual.phoneNumber"
              @blur="v$.individual.phoneNumber.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.phoneNumber.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="label">Celular</label>
          <div class="control">
            <input
              class="input"
              type="tel"
              :class="{ 'is-danger': v$.individual.mobilePhoneNumber.$error }"
              v-mask="['(##) ####-####', '(##) #####-####']"
              placeholder="Celular"
              v-model="state.individual.mobilePhoneNumber"
              @blur="v$.individual.mobilePhoneNumber.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.mobilePhoneNumber.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="label">Foto (url)</label>
          <div class="control">
            <input
              class="input"
              :class="{ 'is-danger': v$.individual.photoUrl.$error }"
              type="text"
              placeholder="Foto (url)"
              v-model="state.individual.photoUrl"
              @blur="v$.individual.photoUrl.$touch()"
              @change="onChange"
            />
            <p
              class="help is-danger"
              v-for="error of v$.individual.photoUrl.$errors"
              :key="error.id"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <StepsNavigation
          :isFirstStep="isFirstStep"
          :isLastStep="isLastStep"
          :currentStep="currentStep"
          @onPrevStep="onPrevStep"
          @onNextStep="onNextStep"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { mask } from 'vue-the-mask'
  import useVuelidate from '@vuelidate/core'
  import { defineComponent, reactive } from 'vue'
  import StepsNavigation from '../steps-navigation/steps-navigation.vue'
  import {
    email,
    helpers,
    minLength,
    required,
    url,
  } from '@vuelidate/validators'
  import { useStore } from 'vuex'
  import moment from 'moment'

  export default defineComponent({
    directives: { mask },
    components: { StepsNavigation },
    props: {
      isFirstStep: Boolean,
      isLastStep: Boolean,
      currentStep: {
        type: Number,
        default: 0,
      },
    },
    setup(_props, { emit }) {
      const store = useStore()

      const state = reactive({
        individual: store.getters.person,
      })

      const rules = {
        individual: {
          name: {
            required: helpers.withMessage('Nome é obrigatório.', required),
            minLength: helpers.withMessage('Nome é muito curto.', minLength(2)),
          },
          email: {
            email: helpers.withMessage('E-mail inválido.', email),
          },
          phoneNumber: {
            minLength: helpers.withMessage('Telefone inválido.', minLength(8)),
          },
          mobilePhoneNumber: {
            minLength: helpers.withMessage('Celular inválido.', minLength(8)),
          },
          photoUrl: {
            url: helpers.withMessage('Url de foto inválida.', url),
          },
          cpf: {
            required: helpers.withMessage('CPF é obrigatório.', required),
            minLength: helpers.withMessage('CPF incorreto.', minLength(13)),
          },
          gender: {
            required: helpers.withMessage('Sexo é obrigatório.', required),
          },
          birthDate: {
            required: helpers.withMessage(
              'Data de nascimento é obrigatório.',
              required
            ),
          },
        },
      }
      const onChange = () => {
        emit('onChange', state.individual)
      }
      const v$ = useVuelidate(rules, state)

      const onPrevStep = (step: number) => {
        emit('onChangeStep', step)
      }

      const onNextStep = (step: number) => {
        if (v$.value.$invalid) {
          v$.value.$touch()
          return
        }

        store.commit('setIndividual', state.individual)
        emit('onChangeStep', step)
      }
      return {
        v$,
        state,
        onChange,
        onPrevStep,
        onNextStep,
      }
    },
  })
</script>
