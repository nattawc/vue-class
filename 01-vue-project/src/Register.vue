<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="register">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        register() {
            // Perform registration logic here
            console.log('Registering user:', this.username, this.email, this.password);
            
            // Reset form fields
            this.username = '';
            this.email = '';
            this.password = '';
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
