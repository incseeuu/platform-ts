import {lazy} from "react";

export const HomeAsyncPage = lazy(() => new Promise(res => {
    setTimeout(() => {
        // @ts-ignore
        res(import('./Home'))
    }, 2000)
}))