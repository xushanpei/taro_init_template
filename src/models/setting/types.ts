
import { Subscription, Effect } from 'dva';
import { AnyAction, Reducer } from "redux";


export interface IState {
    userInfo: object
}

export interface IEffects {
    setUserInfo: Effect
}

export interface IReducers {
    setUserInfo: Reducer<IState,AnyAction>
}

export interface ISubscriptions {
    subscription: Subscription
}

export interface GlobalModelState {
    namespace: string,
    state: IState,
    effects?: IEffects,
    reducers?: IReducers,
    subscriptions?: ISubscriptions
}