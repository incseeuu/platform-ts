import {RouteProps} from "react-router-dom";
import {HomePage} from "pages/Home";
import {AboutPage} from "pages/About";

export enum AppRoutes {
    ABOUT = 'about',
    HOME = 'home'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.HOME]: '/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}