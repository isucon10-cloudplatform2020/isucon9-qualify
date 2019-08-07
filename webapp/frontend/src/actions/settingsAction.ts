import AppClient from '../httpClients/appClient';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {Action, AnyAction} from "redux";
import {SettingsRes} from "../types/appApiTypes";
import {AppResponseError} from "../errors/AppResponseError";
import {AppState} from "../index";
import {Settings} from "../dataObjects/settings";
import {UserData} from "../dataObjects/user";

export const FETCH_SETTINGS_START = 'FETCH_SETTINGS_START';
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS';
export const FETCH_SETTINGS_FAIL = 'FETCH_SETTINGS_FAIL';

type ThunkResult<R> = ThunkAction<R, AppState, undefined, AnyAction>

export function fetchSettings(): ThunkResult<void> {
    return (dispatch: ThunkDispatch<AppState, any, AnyAction>) => {
        Promise.resolve(() => {
            dispatch(fetchSettingStartAction());
        })
            .then(() => AppClient.get(`/settings`))
            .then((response: Response) => {
                if (!response.ok) {
                    throw new AppResponseError('Request for getting settings data was failed', response);
                }

                return response.json();
            })
            .then((body: SettingsRes) => {
                let user: UserData | undefined = undefined;

                if (body.user) {
                    user = {
                        id: body.user.id,
                        accountName: body.user.account_name,
                        address: body.user.address,
                        numSellItems: body.user.num_sell_items,
                    }
                }

                dispatch(fetchSettingsSuccessAction({
                    csrfToken: body.csrf_token,
                    user: user,
                }));
            })
            .catch((err: Error) => {
                dispatch(fetchItemPageFailAction());
            });
    };
}

export interface FetchSettingsStartAction extends Action<typeof FETCH_SETTINGS_START> {}

const fetchSettingStartAction = (): FetchSettingsStartAction => ({
    type: "FETCH_SETTINGS_START",
});

export interface FetchSettingsSuccessAction extends Action<typeof FETCH_SETTINGS_SUCCESS> {
    payload: {
        settings: Settings,
    },
}

const fetchSettingsSuccessAction = (settings: Settings): FetchSettingsSuccessAction => ({
    type: "FETCH_SETTINGS_SUCCESS",
    payload: {
        settings,
    },
});

export interface FetchSettingsFailAction extends Action<typeof FETCH_SETTINGS_FAIL> {}

const fetchItemPageFailAction = (): FetchSettingsFailAction => ({
    type: "FETCH_SETTINGS_FAIL",
});

