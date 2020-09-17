<template>
<vs-card type="3">
    <template #title>
    <h3>{{data.camera.full_name}}</h3>
    </template>
    <template #img>
        <img v-bind:src="data.img_src" class="img-fluid" />
    </template>
    <template #text>
    <p>Earth Date : {{data.earth_date}}</p>
    <p>Rover : {{data.rover.name}}</p>
    </template>
</vs-card>
</template>

<script>
export default {
    props: ['data']
};
</script>

<style>
</style>