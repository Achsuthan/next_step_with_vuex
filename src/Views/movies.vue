<template>
  <b-container>
    <b-card>
      <h2>Movies List</h2>
      <div>
        <b-card-group deck>
          <b-row>
            <template v-for="i in 30">
              <b-col :key="i" cols="4">
                <b-card
                  class="mb-2"
                  title="Title"
                  img-src="https://picsum.photos/300/300/?image=41"
                  img-alt="Image"
                  img-top
                >
                  <div class="h2 mb-0">
                    <b-icon-heart></b-icon-heart>
                  </div>
                  <div class="h2 mb-0">
                    <b-icon-heart-fill></b-icon-heart-fill>
                  </div>
                  <b-card-text>
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card>
              </b-col>
            </template>
          </b-row>
        </b-card-group>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "MoviesList"
};
</script>