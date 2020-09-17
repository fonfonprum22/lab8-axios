<template>
  <div>
    <div
      :class="{ hasOpenLoading }">
    </div>
    <div class="row" v-if="hasOpenLoading != true">
      <div class="col " v-for="item in mars.photos" v-bind:key="item.index">
        <card :data = "item" id="cardMars" />
      </div>
    </div>
  </div>
</template>

<script>
import card from './Card'
export default {
  data() {
    return {
      mars: "",
      hasOpenLoading: true,
    };
  },
  components: {
    card
  },
  methods: {
    fetchMars: function (type) {
      const loading = this.$vs.loading({
            type
          })
      this.axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=p1v9iusZJSsWsj5taNVjJIfAGOg9mdzezScnD7G1&fbclid=IwAR2ELljNBooebWE-Wxr09YjVnqZKCSLCjn8bAYPTW-DkUWY0pwF8BHo9SJg"
        )
        .then((res) => {
          this.mars = res.data;
          loading.close()
          this.hasOpenLoading = false
        });
    }
  },
  created() {
    this.fetchMars('corners');
  },
};
</script>

<style >
#cardMars {
  padding : 20px;
}
</style>

<style scoped lang="stylus">
    .hasOpenLoading
      .box-loading
        opacity 0
        transform scale(.7)
    .box-loading
      width 120px
      height 120px
      position relative
      margin 5px
      border-radius 20px
      box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
      overflow hidden
      cursor pointer
      transition all .25s ease
      &:hover
        transform translate(0,-5px)
        box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
      >>>.vs-loading
        padding 0px
  </style>