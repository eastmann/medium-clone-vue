<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign Up</h1>
                    <p class="text-xs-center">
                        <router-link :to="{ name: 'login' }">Need an account?</router-link
                        >
                    </p>
                    VALIDATION ERRORS
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input
                                type="text"
                                class="form-control from-control-lg"
                                placeholder="Username"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                type="text"
                                class="form-control from-control-lg"
                                placeholder="Email"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                type="password"
                                class="form-control from-control-lg"
                                placeholder="Password"
                            />
                        </fieldset>
                        <button
                            class="btn btn-large btn-primary pull-xs-right"
                            :disabled="isSubmitting">
                                Sign Up
                        </button>
                        {{ isSubmitting }}
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MCVRegister',

    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        }
    },

    methods: {
        onSubmit() {
            console.log('Submitting form')

            this.$store
                .dispatch('register', {
                    email: 'fhksjfhiwuegrbfsdfb@com',
                    username: 'dfshriwehrkj3hkj',
                    password: '32424353'
                })
                .then(user => {
                    console.log('Successfully registered user', user)
                })
        },

    },
}
</script>
