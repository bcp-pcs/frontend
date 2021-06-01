<template>
  <div>
      <v-card flat>
        <v-card-title class="d-md-none" v-text="title" />
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span v-if="mortgages.length === 0" class="text-h5">
                  <v-icon color="red" x-large>mdi-alert-octagon</v-icon>
                  Oops!! There are no mortgage available, try search again.
                </span>
                <v-list style="width: 100%">
                  <template v-for="(item, index) in mortgages">
                    <v-list-item :key="'A' + item.id">
                      <v-list-item-avatar color="green">
                        <v-icon>{{ index + 1 }}</v-icon>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="text-h5">
                          {{ item.lender }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <v-row>
                            <v-col cols="12" sm="4">
                              <b>Interest Rate</b>
                              {{ item.interestRate * 100 }}%
                            </v-col>
                            <v-col cols="12" sm="4">
                              <b>Loan-to-value</b> &lt;{{ item.ltv * 100 }}%
                            </v-col>
                            <v-col cols="12" sm="4">
                              <b>Rate Type</b> {{ item.interestRateType }}
                            </v-col>
                          </v-row>
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <!--v-list-item-action>
                        <v-list-item-action-text
                          v-text="item.interestRateType"
                        ></v-list-item-action-text>
                        <br />
                      </v-list-item-action-->
                    </v-list-item>

                    <v-divider :key="'B' + item.id" />
                  </template>
                </v-list>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onClickTryAgain"> Try again! </v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CcDefStep3',

  props: {
    title: String,
  },

  data: () => ({
    isFormValid: false,
    //
  }),

  methods: {
    ...mapGetters(['getCsMortgages']),
    onClickTryAgain() {
      this.$emit('clicked', 2);
    },
  },

  computed: {
    mortgages() {
      return this.getCsMortgages().sort(
        (a, b) => a.interestRate - b.interestRate,
      );
    },
  },
};
</script>

<style>
</style>
