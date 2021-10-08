<template>
  <div class="p-4 mt-5">
    <div>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchText"
        class="form-control"
      />
    </div>
    <div
      class="card mt-3"
      :class="
        this.$store.state.isDarkMode
          ? 'bg-nav-dark text-light'
          : 'bg-light text-dark'
      "
      v-for="todo in filteredTodos"
      v-bind:key="todo"
    >
      <div class="card-header">
        <h5
          :class="{ 'text-decoration-line-through': todo.isDone }"
          :aria-controls="'a' + todo.timestamp"
          :href="'#a' + todo.timestamp"
          aria-expanded="false"
          class="d-inline"
          data-bs-toggle="collapse"
          role="button"
          @click="todo.expanded = !todo.expanded"
        >
          <i class="bi bi-chevron-right" v-if="!todo.expanded"></i>
          <i class="bi bi-chevron-up" v-else></i>
          {{ todo.title }}
        </h5>
        <i
          class="bi bi-square d-inline float-end align-middle"
          v-if="!todo.isDone"
          @click="
            todo.isDone = !todo.isDone;
            updateTodo(todo);
          "
        ></i>
        <i
          class="bi bi-check-square-fill d-inline float-end align-middle"
          v-else
          @click="
            todo.isDone = !todo.isDone;
            updateTodo(todo);
          "
        ></i>
      </div>
      <div class="collapse" :id="'a' + todo.timestamp">
        <div class="card-body">
          <p class="card-text">
            {{ todo.desc }}
          </p>
        </div>
        <div class="card-footer">
          <span>{{ timeConverter(todo.timestamp) }}</span>
          <i
            class="bi bi-trash float-end align-middle"
            @click="deleteTodo(todo)"
            role="button"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toDoList",
  data() {
    return {
      todos: [],
      searchText: "",
    };
  },
  created() {
    this.todos = this.$store.state.toDoList;
    for (let todo of this.todos) {
      todo.expanded = false;
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        return todo.title.includes(this.searchText);
      });
    },
  },
  methods: {
    timeConverter(timestamp) {
      let a = new Date(timestamp);
      return a.toLocaleString();
    },
    updateTodo(todo) {
      let clone = Object.assign({}, todo);
      delete clone.expanded;
      this.$store.commit("updateTodo", clone);
    },
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo);
      this.todos = this.todos.filter((e) => e.timestamp !== todo.timestamp);
    },
  },
};
</script>
<style scoped></style>
