<template>
  <form>
    <v-container>
      <v-layout row>
        <v-text-field
          label="Id"
          :value="member.id"
        />
        <v-text-field
          label="login"
          :value="member.login"
        />
        <v-text-field
          label="avatar_url"
          :value="member.avatar_url"
        />
        <v-text-field
          label="name"
          :value="member.name"
        />
        <v-text-field
          label="created_at"
          :value="member.created_at"
        />
        <v-text-field
          label="updated_at"
          :value="member.updated_at"
        />
      </v-layout>
    </v-container>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

import { MemberProps } from "../../pages/detail/memberProps";
import { Member } from "../../model/member";
import { getMemberByLogin } from "../../api/memberAPI";


export default Vue.extend({
  name: "MemberDetail",
  props:{
    member: {}
  } as MemberProps
  
});
</script>
