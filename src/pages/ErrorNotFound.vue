<template>
  <div class="fullscreen bg-white text-dark text-center q-pa-md flex flex-center">
    <div>
      <div class="content-center items-center justify-center relative-position">
        <q-img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          style="width: 460px; height: 260px; object-fit: scale-down"
        />
        <div class="absolute-top tw:pt-2 tw:pr-2">
          <h3 style="opacity: 0.9">4<span style="font-size: 3rem">O</span>4</h3>
        </div>
        <div class="absolute-bottom">
          <h4 style="opacity: 0.9">Oops! Nothing here</h4>
        </div>
      </div>
      <q-btn
        class="q-mt-xl"
        text-color="blue"
        unelevated
        to="/"
        label="Back to Home Page"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
