import * as React from "react";
// import './style/index.css'

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class UserInfo extends React.Component<IHelloProps, {}> {
    public render() {
        
        return <h1>UserInfo {this.props.userName}!</h1>;
    }
}
export interface IHelloProps { userName: string; icon?: string; }