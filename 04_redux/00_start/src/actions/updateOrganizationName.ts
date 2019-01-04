import { actionsEnums } from '../common/actionsEnums';

export const updateOrganizationName = (newName: string) => ({
    type: actionsEnums.UPDATE_ORGANIZATION_NAME,
    payload: newName,
});