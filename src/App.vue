<script setup lang="ts">
import ClientLayout from './components/layouts/ClientLayout.vue'
import AuthLayout from './components/layouts/AuthLayout.vue'

import Toast from 'primevue/toast';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import 'primeicons/primeicons.css';
import { ref } from 'vue';
import { useUsersStore } from './stores/users';

const usersStore = useUsersStore();
const user = usersStore.getUserById(1);
if (user) {
  usersStore.addCurrentUser(user);
}
const currentUser = ref(usersStore.getCurrentUser());

</script>

<template>
  <Toast position="bottom-right">
    <template #message="slotProps">
      <div class="block">
        <div class="flex flex-col items-start" style="flex: 1">
          <div class="flex items-center gap-2">
            <Tag :value="slotProps.message.summary" :severity="slotProps.message.severity" class="text-zinc-800"></Tag>
            <Avatar :image="currentUser?.avatar" shape="circle" />
            <span class="font-bold text-lg text-zinc-800">{{ currentUser?.username }}</span>
          </div>
        </div>
        <div class="text-zinc-700 mt-2 ml-2 text-sm">
          {{ slotProps.message.detail }}
        </div>
      </div>
    </template>
  </Toast>
  <div class="dark:bg-zinc-800 dark:text-zinc-300 font-serif bg-white text-zinc-800">
    <div v-if="currentUser?.role === 'client'">
      <ClientLayout />
    </div>
    <div v-else>
      <AuthLayout />
    </div>
  </div>
</template>

<style scoped>
.p-toast-message,
.p-toast-icon {
  background-color: antiquewhite;
}
</style>