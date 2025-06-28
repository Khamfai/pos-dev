import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('auth_token'));
  const user = ref<any>(null);

  const isAuthenticated = computed(() => {
    return token.value !== null && token.value !== undefined && token.value !== '';
  });

  const login = (authToken: string, userData?: {
    id: string;
    name: string;
    email: string;
  }) => {
    token.value = authToken;
    user.value = userData;
    localStorage.setItem('auth_token', authToken);
    if (userData) {
      localStorage.setItem('user_data', JSON.stringify(userData));
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  };

  const initializeAuth = () => {
    const savedToken = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('user_data');

    if (savedToken != null && savedToken.trim() !== '') {
      token.value = savedToken;
    }
    if (savedUser != null && savedUser.trim() !== '') {
      user.value = JSON.parse(savedUser);
    }
  };

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    initializeAuth
  };
});
