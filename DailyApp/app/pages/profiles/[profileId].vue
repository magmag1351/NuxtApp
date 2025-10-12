<template>
 {{profiledId}}
</template>

<script lang="ts" setup>
 const profiledId = useRoute().params.profileId;
</script>