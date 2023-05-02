import {defineEventHandler, setCookie} from 'h3';

export default defineEventHandler((event) => {
    setCookie(event, 'SESSION_ID', 'xxx', {httpOnly: true, secure: true});
    return {
        fullname: 'Nicolas Payot',
        username: 'nicolaspayot',
        isAdmin: true,
    };
});
