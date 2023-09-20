import {
  loginActionTypes,
  updateAccessTokenActionType,
} from '../../actionTypes';
import loginApi from '../../../api/session/loginApi';

export const loginAction = ({
  password,
  username,
  onSuccess,
  onFailure,
}: {
  password?: string;
  username?: string;
  onSuccess?: () => void;
  onFailure?: (errorText: string) => void;
}): TRequestAction => ({
  type: loginActionTypes.request,
  payload: {
    apiMethod: loginApi,
    isAuthenticated: false,
    failureActionType: loginActionTypes.failure,
    successActionType: loginActionTypes.success,
    onSuccess,
    onFailure,
    params: {
      account: {
        username,
        password,
      },
    },
  },
});

export const updateAccessTokenAction = ({ token }: { token: string }) => ({
  type: updateAccessTokenActionType,
  payload: {
    token,
  },
});
