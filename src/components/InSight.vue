<template>
  <div>
    <div :class="{ hasOpenLoading }"></div>
    <!-- {{InSight}} -->
    <div class="row" v-if="haveOpenDoad != true">
      {{inSight}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inSight:"",
       hasOpenLoading: true,
    };
  },
  methods: {
    fetchInSight: function (type) {
    const loading = this.$vs.loading({
      type
    })
      this.axios
        .get(
          "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
        .then((res) => {
          this.inSight = res.data;
          loading.close()
          this.hasOpenLoading = false
        });
    },
  },
  created() {
    this.fetchInSight('corners');
  },
};
</script>

