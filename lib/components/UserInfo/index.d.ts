import * as React from "react";
export default class UserInfo extends React.Component<IHelloProps, {}> {
    render(): JSX.Element;
}
export interface IHelloProps {
    userName: string;
    icon?: string;
}
