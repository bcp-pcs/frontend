<template>
  <div>
    <h1>Case Study Version</h1>
    <v-stepper v-model="e1" class="mt-3">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">{{step1text}}</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">{{step2text}}</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">{{step3text}}</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <cc-def-step-1 :title="step1text" @clicked="setStep"/>
        </v-stepper-content>

        <v-stepper-content step="2">
          <cc-def-step-2 :title="step2text" @clicked="setStep"/>
        </v-stepper-content>

        <v-stepper-content step="3">
          <cc-def-step-3 :title="step3text" @clicked="setStep"/>
          <!--v-card flat class="mb-12" height="200px">
            <v-card-title class="d-md-none" v-text="step3text"/>
          </v-card>
          <v-btn color="primary" @click="e1 = 2"> Try again! </v-btn-->
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import CcDefStep1 from '../components/cardcontent/CcDefStep1.vue';
import CcDefStep2 from '../components/cardcontent/CcDefStep2.vue';
import CcDefStep3 from '../components/cardcontent/CcDefStep3.vue';

export default {
  name: 'ViewCaseStudy',

  components: {
    CcDefStep1,
    CcDefStep2,
    CcDefStep3,
  },

  data() {
    return {
      e1: 1,
      step1text: 'Tell us who you are!',
      step2text: 'And your mortgage details?',
      step3text: 'Here you are!',
    };
  },

  methods: {
    setStep(value) {
      this.e1 = value;
    },
  },
};
</script>

<style>
</style>
