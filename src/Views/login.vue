<template>
  <b-container class="bv-example-row">
    <div>
      <b-card class="text-center">
          <h3>Login</h3>
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="password"
              type="email"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if(this.email && this.password){
          console.log("Can call API")
      }
    },
  }
};
</script>