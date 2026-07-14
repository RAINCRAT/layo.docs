<script setup>
import VPPage from '@vuepress/theme-default/lib/client/components/VPPage.vue'
</script>

<template>
  <VPPage>
    <template #bottom>
      <footer class="vp-footer">
        <a
          href="https://icp.gov.moe/?keyword=20260812"
          target="_blank"
          class="no-blue"
        >萌ICP备20260812号</a>
      </footer>
    </template>
  </VPPage>
</template>

<style>
.vp-footer {
  padding: 2.5rem;
  border-top: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-mute);
  text-align: center;
}
.vp-footer .no-blue {
  color: inherit;
  text-decoration: none;
}
.vp-footer .no-blue:hover {
  text-decoration: underline;
}
</style>