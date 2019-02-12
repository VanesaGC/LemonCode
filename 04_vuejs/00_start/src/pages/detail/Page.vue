<template>
 <member-detail :member="member"/>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberProps } from "./MemberProps";
import { MemberDetail } from "./../../components";


export default Vue.extend({
  name: "MemberDetail",
  components: { MemberDetail },
  props: {
  member: {}
} as MemberProps,
});
</script>