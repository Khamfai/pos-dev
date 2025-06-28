<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <q-input
          filled
          label="Username"
          v-model="username"
          clearable
          stack-label
          required
        />
        <q-input
          filled
          label="Email"
          v-model="email"
          type="email"
          clearable
          stack-label
          required
        />
        <q-input
          filled
          label="Password"
          v-model="password"
          type="password"
          clearable
          stack-label
          required
        />
        <q-input
          filled
          label="Confirm Password"
          v-model="confirmPassword"
          type="password"
          clearable
          stack-label
          required
        />
        <q-btn
          label="Register"
          color="primary"
          dense
          flat
          rounded
          icon="mdi-arrow-right-bold"
          @click="onRegister"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup lang="ts">
import { Notify } from "quasar";
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const onRegister = async () => {
  if (password.value !== confirmPassword.value) {
    Notify.create({
      type: "negative",
      message: "Passwords do not match",
    });
    return;
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock successful registration
  Notify.create({
    type: "positive",
    message: "Registration successful!",
  });

  // Clear form fields
  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>
