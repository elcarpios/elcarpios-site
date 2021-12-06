<template>
  <a :href="href" target="_blank" @click="trackClick">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    trackClick() {
      this.$gtag.event('Click', {
        event_category: 'External Link',
        event_label: this.href
      });
    }
  }
}
</script>