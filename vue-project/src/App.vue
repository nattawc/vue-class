<template>
  <div class="login">
    <h1>Calculator</h1>
    a = {{ a }}<br />
    c = {{ c }}
    <form>
      <input type="text" placeholder="a" v-model="a" required />
      <input type="text" placeholder="b" v-model="b" required />
      <button type="button" @click="plus">Plus</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 0,
      c: 0,
    };
  },
  methods: {
    plus() {
      this.c = parseInt(this.a) + parseInt(this.b);
      console.log("Plus:", this.a, this.b);
    },
  },
};
</script>

<style scoped></style>
