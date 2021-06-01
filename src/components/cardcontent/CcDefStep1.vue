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
                  v-model="firstName"
                  dense
                  label="First name*"
                  :rules="requiredRules"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="lastName"
                  dense
                  label="Last name*"
                  :rules="requiredRules"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="email"
                  dense
                  label="Email*"
                  :rules="emailRules"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      dense
                      v-model="dateOfBirth"
                      label="Day of birth*"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="requiredRules"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dateOfBirth"
                    :active-picker.sync="activePicker"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6">
                <small>*indicates required field</small>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onClickButton"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CcDefStep1',

  props: {
    title: String,
  },

  data: () => ({
    isFormValid: false,
    // Applicant data
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: null,
    // Date menu
    activePicker: null,
    menu: false,
    // validation rules
    requiredRules: [(v) => !!v || 'Required'],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    ...mapActions(['createCsApplicant']),
    onClickButton() {
      this.$refs.form.validate();
      this.$nextTick(() => {
        if (this.isFormValid) {
          this.createCsApplicant(
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              dateOfBirth: this.dateOfBirth,

            },
          );
          this.$emit('clicked', 2);
        }
      });
    },
    save(date) {
      this.$refs.menu.save(date);
    },
  },

  watch: {
    menu(val) {
      if (val) { setTimeout(() => { this.activePicker = 'YEAR'; }); }
    },
  },
};
</script>

<style>
</style>
