<template>
  <member-table/>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberTable } from "./../../components";

export default Vue.extend({
  name: "MemberListPage",
  components: { MemberTable }
});
</script>