<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        Licencia MIT | Copyright © 2023-Presente |
        <a href="https://github.com/LilyRosa">LilyRosa🐈</a> &
        <a href="https://github.com/EduardoProfe666">EduardoProfe666🎩</a>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
:root {
  scroll-behavior: smooth;

  --c-brand: #f00bce;
  --c-brand-light: #fc06c3;
}
html.dark {
  scroll-behavior: smooth;

  --c-brand: #f00bce;
  --c-brand-light: #fc06c3;
}
</style>
