import { useUsersStore } from '../stores/users';
import { type Router } from 'vue-router';


export function useAuthGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    const usersStore = useUsersStore();
    const isAuthenticated = usersStore.isAuthenticated;
    const userRole = usersStore.currentUserRole;
    console.log('🚀 ~ userRole : ', userRole)

    console.log(to.meta.roles)

    if (to.meta.requiresAuth && !isAuthenticated) {
      // rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      next('/auth/login');
    } else if (to.meta.roles) {
      // rediriger vers une page d'erreur ou une autre page si l'utilisateur n'a pas le rôle nécessaire
      next('/404');
    } else {
      // autoriser l'accès à la route
      next();
    }
  });
}