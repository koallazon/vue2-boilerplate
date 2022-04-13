<template>
  <div
    class="pa-4 green darken-2 fill-height overflow-auto fill-width"
    style="height: calc(100vh - 145px)"
  >
    <div class="d-flex flex-row justfiy-start">
      <v-card
        class="grey lighten-2 pa-2 mr-4 text-left"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        rounded
        min-width="350"
      >
        <div class="flex items-center mb-2 font-bold">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <v-card
            class="
              d-flex
              align-center
              flex-wrap
              mb-2
              pa-2
              white
              grey--text
              text--darken-2
            "
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            rounded
            @click="goToTask(task)"
          >
            <span class="flex-shrink-0 font-bold">
              {{ task.name }}
            </span>
            <p
              v-if="task.description"
              class="flex-shrik-0 ml-1 mb-0 text-sm-body-1"
            >
              {{ task.description }}
            </p>
          </v-card>
          <v-text-field
            type="text"
            solo
            flat
            dense
            color="transparent"
            placeholder="+ Enter new task"
            @keyup.enter="createTask($event, column.tasks)"
          />
        </div>
      </v-card>
    </div>

    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    ...get('board', ['board']),
    isTaskOpen() {
      return this.$route.name === 'board-task'
    },
  },
  methods: {
    goToTask({ id }) {
      this.$router.push({ name: 'board-task', params: { id } })
    },
    close() {
      this.$router.push({ name: 'board' })
    },
    createTask(event, tasks) {
      this.$store.commit('board/CREATE_TASK', {
        tasks,
        name: event.target.value,
      })
    },
  },
}
</script>

<style lang="css">
.task-bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
