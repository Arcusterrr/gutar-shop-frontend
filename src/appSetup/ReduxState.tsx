import { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from "../reduxStore";

type ReduxStateProps = {
    children: JSX.Element[] | ReactElement
}

export const ReduxState: FC<ReduxStateProps> = ({
    children,
}: ReduxStateProps) => (
    <Provider store={store}>
        {children}
    </Provider>
)