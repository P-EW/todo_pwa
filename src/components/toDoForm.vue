<template>
  <form class="p-4" v-on:submit.prevent="addTodo">
    <div class="mb-3">
      <input
        class="form-control"
        v-model="todoTitle"
        placeholder="What needs to be done ?"
        required
      />
    </div>
    <div class="mb-3">
      <textarea
        class="form-control"
        v-model="todoDesc"
        placeholder="Any description or additional information ?"
      />
    </div>
    <button class="btn btn-primary float-end" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: "toDoForm",
  data() {
    return {
      todoTitle: "",
      todoDesc: "",
    };
  },
  methods: {
    addTodo() {
      let newTodo = {
        title: this.todoTitle,
        desc: this.todoDesc,
        timestamp: Date.now(),
        isDone: false,
      };
      this.$store.commit("addTodo", newTodo);
      this.todoTitle = "";
      this.todoDesc = "";
    },
  },
};
</script>
<style scoped></style>
