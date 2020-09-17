<template>
  <div>
    <!-- {{Donki}} -->
    <div class="row">
      
        </div>
      </div>
 
</template>

<script>
export default {
  data() {
    return {
      donki: "",
    };
  },
  components: {},
  methods: {
    fetchDonki: function () {
      this.axios
        .get(
          "https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=DEMO_KEY"
        )
        .then((res) => {
          this.donki = res.data;
        });
    },
  },
  created() {
    this.fetchDonki();
  },
};
</script>
