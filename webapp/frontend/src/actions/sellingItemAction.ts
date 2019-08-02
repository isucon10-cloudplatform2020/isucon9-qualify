import AppClient from '../httpClients/appClient';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FormErrorState } from "../reducers/formErrorReducer";
import { push } from 'connected-react-router';
import {AnyAction} from "redux";
import {SellReq, SellRes} from "../types/appApiTypes";

export const SELLING_ITEM_SUCCESS = 'SELLING_ITEM_SUCCESS';
export const SELLING_ITEM_FAIL = 'SELLING_ITEM_FAIL';

type State = void;
type ThunkResult<R> = ThunkAction<R, State, undefined, AnyAction>

export function listItemAction(payload: SellReq): ThunkResult<void> {
    return (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        AppClient.post('/sell', payload)
            .then((response: Response) => {
                if (response.status !== 200) {
                    throw new Error('HTTP status not 200');
                }

                return response.json();
            })
            .then((body: SellRes) => {
                dispatch(sellingSuccessAction(body.id));
                dispatch(push('/items')); // TODO
            })
            .catch((err: Error) => {
                dispatch(sellingFailAction({
                    errorMsg: [err.message]
                }))
            })
    };
}

export interface SellingSuccessAction {
    type: typeof SELLING_ITEM_SUCCESS,
    payload: {
        itemId: number,
    },
}

export function sellingSuccessAction(itemId: number): SellingSuccessAction {
    return {
        type: SELLING_ITEM_SUCCESS,
        payload: { itemId },
    };
}

export interface SellingFailAction {
    type: typeof SELLING_ITEM_FAIL,
    payload: FormErrorState,
}

export function sellingFailAction(newErros: FormErrorState): SellingFailAction {
    return {
        type: SELLING_ITEM_FAIL,
        payload: newErros,
    };
}
