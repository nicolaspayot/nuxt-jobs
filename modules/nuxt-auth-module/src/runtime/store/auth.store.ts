import {defineStore} from 'pinia';
import {ref} from 'vue';
import {useCookie, navigateTo} from '#app';

export const useAuth = defineStore('auth', () => {
    const sessionCookie = useCookie('SESSION_ID');
    const isConnected = ref(sessionCookie.value != null);

    const isAdmin = ref(true);

    async function signin() {
        try {
            await $fetch('/api/signin', {method: 'POST'});
            isConnected.value = true;
            return navigateTo('/');
        } catch (err) {
            console.error(err);
        }
    }

    return {
        isConnected,
        isAdmin,
        signin,
    };
});
