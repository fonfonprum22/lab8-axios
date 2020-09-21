<template>
<div>
  <div  :class="{ hasOpenLoading }">
  </div>
   <div class="row" v-if="hasOpenLoading != true">
     {{epic}}
</div>
</div>
</template>


<script>
export default {
  data() {
    return {
      epic: "hello",
      hasOpenLoading: true,
    };
  },
  components: {},
  methods: {
    fetchEpic: function (type) {
       const loading = this.$vs.loading({
         type
       })
      this.axios
        .get("https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY")
        .then((res) => {
          this.epic = res.data;
          loading.close()
          this.hasOpenLoading = false
        });
    },
  },
  created() {
    this.fetchEpic('corners');
  },
};
</script>
