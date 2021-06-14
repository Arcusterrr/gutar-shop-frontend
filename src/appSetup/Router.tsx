import React, { FC } from "react";
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { DeliveryAndPay, Good, GoodsPage, GuitarTypesPage, LoginPage, MainPage, Order, PersonPage, RegisterPage } from '../Containers/';
import { Secure } from "./SecureRoute";
type AppRoutesPropTypes = {
    children?: never;
}

export const AppRoutes: FC<AppRoutesPropTypes> = () => (
    <BrowserRouter>
        <Switch>
            
            <Route path="/" component={MainPage} exact />
            <Route path="/login" exact>
                <LoginSecure>
                    <LoginPage />
                </LoginSecure>
            </Route>
            <Route path="/register" exact>
                <LoginSecure>
                    <RegisterPage />
                </LoginSecure>
            </Route>
            <Route path="/goods" component={GoodsPage} exact />
            <Route path="/order" component={Order} exact />
            <Route path="/person" component={PersonPage} exact />
            <Route path="/delivery-and-pay" component={DeliveryAndPay} exact />
            <Route path="/guitartypes" component={GuitarTypesPage} exact />
            <Route path="/good/:id" component={Good} exact />
            <Redirect to="/" />

        </Switch>
    </BrowserRouter>
)



export const appValidation = (tokenToCheck: string) => tokenToCheck.length > 0;
export const loginValidation = (tokenToCheck: string) => tokenToCheck.length === 0;

type SecureProps = {
  children: JSX.Element,
}

export const ApplicationSecure: FC<SecureProps> = (props) => (
  <Secure validation={appValidation} redirect="/login">
    {props.children}
  </Secure>
);

export const LoginSecure: FC<SecureProps> = (props) => (
  <Secure validation={loginValidation} redirect="/">
    {props.children}
  </Secure>
);