import { actionsEnums } from '../common/actionsEnums';
import { MemberEntity } from '../model/member';

export type memberState = MemberEntity[];

export const memberReducer = (state: memberState = [], action) => {
  switch (action.type) {
    case actionsEnums.MEMBER_REQUEST_COMPLETED:
      return handleMemberRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleMemberRequestCompletedAction = (state: memberState, members) => {
  return members;
}

export interface OrganizationState {
  organization: string;
}

const defaultOrganizarionState: OrganizationState =
{
  organization: 'lemoncode'
};

export const organizationReducer = (state: OrganizationState = defaultOrganizarionState, action) => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION_NAME:
      return handleOrganizationAction(state, action.payload);
  }
  return state;
}

const handleOrganizationAction = (state: OrganizationState, organization) => {
  return {
    ...state,
    organization,
  };
}
