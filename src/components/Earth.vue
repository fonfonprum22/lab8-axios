<template>
  <div>
    <!-- {{Erath}} -->
    <div class="row">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      earth: "",
    };
  },
  methods: {
    fetchEarth: function () {
      this.axios
        .get(
          "https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.15&api_key=DEMO_KEY"
        )
        .then((res) => {
          this.earth = res.data;
        });
    },
  },
  created() {
    this.fetchEarth();
  },
};
</script>


}
<style>
</style>