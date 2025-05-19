<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="tw:lg:mx-4 tw:lg:my-1 tw:lg:rounded-lg">
      <q-toolbar :class="theme" class="tw:lg:rounded-lg">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> POS System </q-toolbar-title>
        <q-btn flat dense rounded class="material-icons" :icon="iconTheme" @click="setTheme()" />
        <div class="tw:px-1"></div>
        <q-btn flat dense rounded class="material-icons" icon="translate">
          <q-menu style="border-radius: 6px; width: 250px">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="translate" size="35px" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Laos (ລາວ)</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-checkbox
                    v-model="checked"
                    checked-icon="star"
                    unchecked-icon="star_border"
                    indeterminate-icon="help"
                  />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="translate" size="35px" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Thai (ไทย)</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="translate" size="35px" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :mini="miniState" show-if-above :class="theme">
      <q-list>
        <q-item clickable @click="miniState = !miniState">
          <q-avatar>
            <q-img src="https://avatars.githubusercontent.com/u/61783889?v=4" />
          </q-avatar>
          <q-item-label header> Essential Links </q-item-label>
        </q-item>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>

      <div class="absolute text-center" style="bottom: 20px; width: 100%">
        <q-btn
          flat
          :round="miniState"
          :rounded="!miniState"
          color="red"
          class="material-icons"
          icon="power_settings_new"
          style="background-color: #aecafa; font-weight: bold"
          :label="!miniState ? 'Sign out' : undefined"
        />
      </div>

      <div
        class="q-mini-drawer-hide absolute tw:rounded-full tw:p-2"
        :class="isDark ? 'tw:bg-[#2e4053]' : 'bg-white'"
        style="top: 8px; right: -17px"
      >
        <q-btn
          dense
          round
          unelevated
          color="blue-9"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import { onMounted } from 'vue';
import { Dark } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const miniState = ref(false);
const isDark = ref(false);
const checked = ref();
const theme = computed(() =>
  Dark.isActive ? 'tw:bg-[#34495e] text-white' : 'tw:bg-[#ebedef] text-black',
);
const iconTheme = computed(() => (Dark.isActive ? 'wb_sunny' : 'nights_stay'));
const leftDrawerOpen = ref(false);
const linksList: EssentialLinkProps[] = [
  {
    title: t('dashbord'),
    caption: 'quasar.dev',
    icon: 'home',
    link: '/',
  },
  {
    title: t('manage_plan'),
    caption: 'quasar.dev',
    icon: 'token',
    link: '/admin/package',
  },
  // {
  //   title: t('manage_language'),
  //   caption: 'chat.quasar.dev',
  //   icon: 'translate',
  //   link: '/admin/language',
  // },
  {
    title: t('manage_payment'),
    caption: 'forum.quasar.dev',
    icon: 'redeem',
    link: 'https://forum.quasar.dev',
  },
  {
    title: t('manage_permission'),
    caption: 'github.com/quasarframework',
    icon: 'folder_shared',
    link: 'https://github.com/quasarframework',
  },
  {
    title: t('manage_shop'),
    caption: '@quasarframework',
    icon: 'storefront',
    link: 'https://twitter.quasar.dev',
  },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev',
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev',
  // },
];

onMounted(() => {
  isDark.value = Dark.isActive;
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function setTheme() {
  isDark.value = !isDark.value;
  Dark.set(isDark.value);
}
</script>
