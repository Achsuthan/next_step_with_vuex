<template>
  <b-col cols="4">
    <b-card class="mb-2" :title="item.title" :img-src="item.image" img-alt="Image" img-top>
      <!-- <div class="h2 mb-0">
        <b-icon-heart></b-icon-heart>
      </div>
      <div class="h2 mb-0">
        <b-icon-heart-fill></b-icon-heart-fill>
      </div> -->
      <b-card-text>{{item.description}}</b-card-text>
    </b-card>
  </b-col>
</template>
<script>
export default {
  name: "SingleMovie",
  props: {
    item: Object
  }
};
</script>