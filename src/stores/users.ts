import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'primevue/usetoast';
import { data } from '@/data/users';
import type { User } from '@/types/interfaces';

export const useUsersStore = defineStore('users', () => {
  // PROPERTIES
  const toast = useToast();
  const users = ref<User[]>(data);
  const currentUser = ref<User | null>(null);
  const isAuthenticated = ref<boolean>(false);
  const currentUserRole = ref<'admin' | 'client' | 'vendor' | null>(null);

  // METHODS
  const getCurrentUser = (): User | undefined => {
    const foundUser: User | undefined = users.value.find((u) => u.email === currentUser.value?.email);
    if (foundUser) {
      return foundUser;
    }
  }

  const addCurrentUser = (user: User): void => {
    currentUser.value = user;
    isAuthenticated.value = true;
    currentUserRole.value = user.role;
    toast.add({ severity: 'success', summary: 'Utilisateur', detail: 'Utilisateur connecté', life: 3000 });
  }

  const removeCurrentUser = (): void => {
    currentUser.value = null;
    isAuthenticated.value = false;
    currentUserRole.value = null;
    toast.add({ severity: 'success', summary: 'Utilisateur', detail: 'Utilisateur déconnecté', life: 3000 });
  }

  const getUsers = (): User[] => {
    return users.value;
  }

  const getUserById = (id: number): User | undefined => {
    const foundUser = users.value.find((u) => u.id === id);
    if (foundUser) {
      return foundUser;
    }
  }

  const addUser = (user: User): void => {
    users.value.push(user);
    toast.add({ severity: 'success', summary: 'Utilisateur', detail: 'Utilisateur ajouté', life: 3000 });
  }

  const updateUser = (user: User): void => {
    const index = users.value.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      users.value[index] = user;
      toast.add({ severity: 'success', summary: 'Utilisateur', detail: 'Utilisateur mis à jour', life: 3000 });
    }
  }

  const deleteUser = (id: number): void => {
    const index = users.value.findIndex((u) => u.id === id);
    if (index !== -1) {
      users.value.splice(index, 1);
      toast.add({ severity: 'success', summary: 'Utilisateur', detail: 'Utilisateur supprimé', life: 3000 });
    }
  }

  return {
    isAuthenticated,
    currentUserRole,
    getCurrentUser,
    addCurrentUser,
    removeCurrentUser,
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
  }
})