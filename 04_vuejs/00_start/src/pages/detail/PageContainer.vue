<template>
  <member-page :member="member"/>
</template>

<script lang="ts">
import Vue from "vue";
import { getMemberByLogin } from "../../api/memberAPI";
import { Member, createDefaultMember } from "../../model/member";
import MemberPage from "./Page.vue";

export default Vue.extend({
  name: "MemberPageContainer",
  components: { MemberPage },
  props: { id: String },
  data: () => ({
    member: createDefaultMember()
  }),
  beforeMount() {
    const id = this.id || "";
    console.log("hello2");
    getMemberByLogin(id)
      .then(member => {
        this.member = member;
      })
      .catch(error => console.log("Error con getMemberByLogin: " + error));
  },
});
</script>