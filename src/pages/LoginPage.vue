<template>
  <q-page padding class="login">
    <q-page-container class="content">
      <div class="tw:grid tw:sm:grid-cols-2 tw:grid-cols-1 tw:items-center">
        <div class="login-left tw:text-center tw:content-center tw:relative">
          <div class="tw:text-center tw:content-center" style="height: 91%">
            <h5>Hello, Welcome to</h5>
            <h4>DevPoS</h4>
            <div>The best POS system for your business</div>
          </div>
          <div class="flex tw:py-4">
            <q-btn
              class="btn-fixed-width btn"
              style="width: 100%"
              rounded
              :label="t('Register')"
              :loading="loading"
              @click="onRegister"
            />
          </div>
        </div>
        <div class="tw:sm:col-span-1 login-right">
          <div class="tw:text-center tw:font-bold tw:my-8">
            <q-icon size="80px" name="mdi-account-circle-outline" />
            <h4 style="font-weight: bold">Login</h4>
          </div>
          <q-form class="login-form tw:grid tw:grid-rows-2 tw:gap-10">
            <q-input
              id="username"
              rounded
              outlined
              v-model="username"
              label="Username"
              required
              class="shadow-6 tw:rounded-full"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-account-circle-outline" />
              </template>
            </q-input>

            <q-input
              id="password"
              rounded
              outlined
              v-model="password"
              label="Password"
              required
              :type="pass_type"
              class="shadow-6 tw:rounded-full"
            >
              <template v-slot:prepend>
                <q-btn
                  dense
                  flat
                  round
                  :icon="pass_icon"
                  @click="pass_type = pass_type === 'password' ? 'text' : 'password'"
                />
              </template>
            </q-input>
            <div class="tw:text-end">
              <a href="">{{ t("ForgotPassword") }}</a>
            </div>
            <div>
              <q-btn
                color="primary"
                style="width: 100%"
                rounded
                :label="t('Login')"
                :loading="loading"
                @click="onLogin"
              />
            </div>
            <hr />
            <div class="tw:grid tw:grid-cols-2 tw:gap-6">
              <q-btn
                style="width: 100%"
                rounded
                class="btn"
                label="Google"
                @click="onLogin"
                icon="mdi-google"
              />
              <q-btn
                style="width: 100%"
                rounded
                class="btn"
                label="Facebook"
                @click="onLogin"
                icon="mdi-facebook"
              />
            </div>
          </q-form>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/store/auth-store";
import { Notify } from "quasar";

const { t } = useI18n();
const router = useRouter();
const authStore = useAuthStore();

const username = ref("");
const password = ref("");
const loading = ref(false);
const pass_icon = ref("mdi-key");
const pass_type = ref<"password" | "text">("password");

watch(pass_type, (val) => {
  pass_icon.value = val === "password" ? "mdi-key" : "mdi-lock-off-outline";
});

const onLogin = async () => {
  if (!username.value || !password.value) {
    Notify.create({
      type: "negative",
      message: "Please enter username and password",
    });
    return;
  }

  loading.value = true;

  try {
    // Replace this with your actual API call
    // const response = await api.post('/auth/login', {
    //   username: username.value,
    //   password: password.value
    // });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock successful login
    const mockToken = "mock-jwt-token-" + Date.now();
    const mockUser = {
      id: "1",
      name: username.value,
      email: `${username.value}@example.com`,
    };

    authStore.login(mockToken, mockUser);

    Notify.create({
      type: "positive",
      message: "Login successful!",
    });

    router.push("/");
  } catch (error) {
    Notify.create({
      type: "negative",
      message: "Login failed. Please try again: " + (error as any)?.message,
    });
  } finally {
    loading.value = false;
  }
};

const onRegister = () => {
  router.push("/register");
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
}
.content {
  margin: auto;
  height: fit-content;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(131, 131, 131, 0.7);
}

.login-left {
  height: 100%;
  padding: 2rem;
  border-radius: 1rem;
  font-family: "Righteous";
  div,
  h5 {
    font-family: "Righteous";
  }
  h4 {
    font-family: "Righteous";
    font-weight: bold;
  }
}

.login-right {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/bg7.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
}

.login-form {
  padding: 2rem;
}

.btn {
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
}

@media screen and (max-width: 630px) {
  .content {
    width: 100%;
    padding: 0px;
    box-shadow: none;
  }

  .login-left {
    display: none;
  }
}
</style>
