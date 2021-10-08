<template>
  <div>
    <h1 class="text-center text-warning mt-3">ToDo List:</h1>
    <div class="container">
      <ToDoForm />
      <ToDoList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoForm from "@/components/toDoForm.vue";
import ToDoList from "@/components/toDoList.vue";

export default {
  name: "Home",
  components: {
    ToDoForm,
    ToDoList,
  },
};
</script>
