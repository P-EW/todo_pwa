import { createStore } from "vuex";

export default createStore({
  state: {
    isDarkMode: localStorage.getItem("isDarkModeEnabled") || true,
    toDoList: JSON.parse(localStorage.getItem("toDoList")) || [],
  },
  mutations: {
    swapDarkTheme(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkModeEnabled", state.isDarkMode);
    },
    addTodo(state, todo) {
      state.toDoList.unshift(todo);
      localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
    },
    deleteTodo(state, todo) {
      state.toDoList = state.toDoList.filter(
        (e) => e.timestamp !== todo.timestamp
      );
      localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
    },
    updateTodo(state, todo) {
      state.toDoList[
        state.toDoList.indexOf(
          state.toDoList.find((e) => e.timestamp === todo.timestamp)
        )
      ] = todo;
      localStorage.setItem("toDoList", JSON.stringify(state.toDoList));
    },
  },
  actions: {},
  modules: {},
});
