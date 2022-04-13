<template>
  <v-card
    flat
    rounded
    class="task-view d-flex white py-4 text-left"
    style="margin: 8rem auto 8rem auto !important"
    max-width="700"
  >
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <v-text-field
        :value="task.name"
        type="text"
        dense
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"
      />
      <v-textarea
        :value="task.description"
        color="transparent"
        class="px-2 mt-2"
        height="64"
        @change="updateTaskProperty($event, 'description')"
        @keyup.enter="updateTaskProperty($event, 'description')"
      />
    </div>
  </v-card>
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  computed: {
    ...get('board', ['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    },
  },
  methods: {
    updateTaskProperty(e, key) {
      this.$store.commit('board/UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value,
      })
    },
  },
}
</script>
