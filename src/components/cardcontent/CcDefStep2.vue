<template>
  <div>
    <v-form ref="form" v-model="isFormValid" lazy-validation>
      <v-card flat>
        <v-card-title class="d-md-none" v-text="title" />
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="propertyValue"
                  dense
                  label="Property value"
                  type="number"
                  :rules="propertyValueRules"
                  @blur="spaceTo0"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="depositAmount"
                  dense
                  label="Deposit amount"
                  type="number"
                  :rules="[depositAmountRules]"
                  @blur="spaceTo0"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="onClickBack"> Back </v-btn>
          <v-btn color="primary" @click="onClickContinue"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CcDefStep2',

  props: {
    title: String,
  },

  data: () => ({
    isFormValid: false,
    // validation rules
    propertyValueRules: [
      (v) => {
        if (!Number.isNaN(parseFloat(v)) && v >= 10000 && v <= 99999999) return true;
        return 'Please enter a property value between £10,000 and £99,999,999';
      },
    ],
  }),

  methods: {
    ...mapGetters(['getCsPropertyValue', 'getCsDepositAmount']),
    ...mapActions(['updateCsPropertyValue', 'updateCsDepositAmount', 'fetchCsMortgages']),
    onClickContinue() {
      this.$refs.form.validate();
      this.$nextTick(() => {
        if (this.isFormValid) {
          this.fetchCsMortgages();
          this.$emit('clicked', 3);
        }
      });
    },
    onClickBack() {
      this.$emit('clicked', 1);
    },
    depositAmountRules(v) {
      if (!Number.isNaN(parseFloat(v)) && v <= (this.propertyValue - 5000)) return true;
      return 'Deposit amount must be at least £5,000 less than your property value';
    },
    spaceTo0() {
      if (this.propertyValue === '') { this.propertyValue = '0'; }
      if (this.depositAmount === '') { this.depositAmount = '0'; }
    },
  },

  computed: {
    propertyValue: {
      get() {
        return this.getCsPropertyValue();
      },
      set(value) {
        this.updateCsPropertyValue(value);
      },
    },
    depositAmount: {
      get() {
        return this.getCsDepositAmount();
      },
      set(value) {
        this.updateCsDepositAmount(value);
      },
    },
  },

};
</script>

<style>
</style>
