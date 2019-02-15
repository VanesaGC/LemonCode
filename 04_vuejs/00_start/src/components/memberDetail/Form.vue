<template>
  <form>
    <v-container>
      <v-layout row  wrap>
      <v-flex xs12>
      <img :src="member.avatar_url" style="heigh: 200px; width: 200px;"></img>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Id"
          :disabled="true"
          :value="member.id"
        />
        </v-flex>
        <v-flex xs12>
        <v-text-field
          label="login"
          :disabled="true"
          :value="member.login"
        />
         </v-flex>
        <v-flex xs12>
        <v-text-field
          label="avatar_url"
          :disabled="true"
          :value="member.avatar_url"
        />
         </v-flex>
        <v-flex xs12>
        <v-text-field
          label="name"
          :disabled="true"
          :value="member.name"
        />
         </v-flex>
        <v-flex xs12>
        <v-text-field
          label="created_at"
          :disabled="true"
          :value="member.created_at"
        />
         </v-flex>
        <v-flex xs12>
        <v-text-field
          label="updated_at"
          :disabled="true"
          :value="member.updated_at"
        />
        </v-flex>
      </v-layout>

      <v-btn color="info" href="/"><v-icon dark>chevron_left</v-icon>Volver</v-btn>
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
