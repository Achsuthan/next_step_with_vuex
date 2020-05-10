<template>
  <b-container>
    <b-card>
      <h2>Movies List</h2>
      <div>
        <b-card-group deck>
          <b-row>
            <template v-for="(item, index) in movies">
              <singleMovie :key="index" :item="item" />
            </template>
          </b-row>
        </b-card-group>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MoviesList",
  components: {
    singleMovie: () => import("../components/SingleMovie")
  },
  computed: {
    ...mapState({
      movies: state => state.movies.movies
    })
  },
  created() {
    this.$store.dispatch("movies/getAllMoves");
  }
};
</script>