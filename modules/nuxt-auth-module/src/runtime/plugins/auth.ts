import {storeToRefs, Pinia} from 'pinia';
import {addRouteMiddleware, defineNuxtPlugin, navigateTo} from '#app';
import {useAuth} from '../store/auth.store';

export default defineNuxtPlugin((nuxtApp) => {
    addRouteMiddleware('auth', () => {
        const {isConnected} = storeToRefs(useAuth(nuxtApp.$pinia as Pinia));

        if (!isConnected) {
            return navigateTo('/signin');
        }
    });
});
