<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        Licencia MIT | Copyright © 2023-Presente |
        <a href="https://github.com/LilyRosa" target="_blank">LilyRosa🐈</a> &
        <a href="https://github.com/EduardoProfe666" target="_blank"
          >EduardoProfe666🎩</a
        >
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--c-brand);
}
:root {
  text-align: justify;
  scroll-behavior: smooth;

  --c-brand: #f00bce;
  --c-brand-light: #fc06c3;
}
/* h1,
h2,
h3 {
  color: #f00bce;
} */
html.dark {
  text-align: justify;
  scroll-behavior: smooth;

  --c-brand: #f00bce;
  --c-brand-light: #fc06c3;
}
</style>
