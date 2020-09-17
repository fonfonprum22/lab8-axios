<template>
<div>
     <vs-card type="5">
    <template #title>
      <h3>Pot with a plant</h3>
    </template>
    <template #img>
      <img src="../assets/logo.png" alt="">
    </template>
    <template #text>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          54
        </span>
      </vs-button>
    </template>
  </vs-card>

</div>
</template>


<script>
export default {
  data() {
    return {
      epic: "",
    };
  },
  components: {},
  methods: {
    fetchEpic: function () {
      this.axios
        .get("https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY")
        .then((res) => {
          this.epic = res.data;
        });
    },
  },
  created() {
    this.fetchEpic();
  },
};
</script>
