<template>
  <div>
    <div :class="{ hasOpenLoading }"></div>
    <!-- {{Donki}} -->
    <div class="row" v-if="hasOpenLoading != true">
      {{donki}}
        </div>
      </div>
 
</template>

<script>
export default {
  data() {
    return {
      donki: "",
      hasOpenLoading: true,
    };
  },
  components: {},
  methods: {
    fetchDonki: function (type) {
       const loading = this.$vs.loading({
         type
       })
      this.axios
        .get(
          "https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=DEMO_KEY")
        .then((res) => {
          this.donki = res.data;
          loading.close()
          this.hasOpenLoading = false
        
        });
    },
  },
  created() {
    this.fetchDonki('corners');
  },
};
</script>
