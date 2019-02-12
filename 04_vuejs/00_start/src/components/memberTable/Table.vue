<template>
  <v-app>
    <v-form>
      <v-container>
        <v-layout column>
          <v-flex xs12>
            <h2>Member Page</h2>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Organization"
              placeholder="Write an organization"
              :value="organization"
              @input="(newValue) => changeOrganization(newValue)"
              prepend-icon="business"
              clear-icon="clear"
              clearable
              :append-outer-icon="organization ? 'search' : ''"
              @click:append-outer="loadMembers"
              @keyup.enter.native="loadMembers"
            ></v-text-field>
            <p>
              Search: {{organization}}
              <input @keyup.enter="loadMembers">
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-data-table :headers="headers" :items="members" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs-center $style.column">
          <img :src="props.item.avatar_url" :class="$style.image">
        </td>
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.login }}</td>
        <td :class="$style.column">
          <v-btn flat icon :to="`detail/${props.item.login}`">
          <v-icon>edit</v-icon>
        </v-btn>
      </td>
      </template>
    </v-data-table>

    <!--
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member"/>
        </template>
      </tbody>
    </table>-->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    organization: "lemoncode",
    members: [] as Member[],
    headers: [
      {
        text: "Avatar",
        align: "left",
        sortable: false,
        value: "avatar_url"
      },
      { text: "Id", value: "id" },
      { text: "Name", value: "login" },
    ]
  }),
  methods: {
    loadMembers: function(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      getAllMembers(this.organization).then(members => {
        this.members = members;
      });
    },
    changeOrganization(newOrganization) {
      this.organization = newOrganization;
    }
  }
});
</script>

<style module>
/*.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}*/
.image {
  max-width: 10rem;
}

.column {
  width: 33.33%;
  text-align: center;
}
</style>
