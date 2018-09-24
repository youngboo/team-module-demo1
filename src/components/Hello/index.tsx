import * as React from "react";
import './style/index.css'

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<IHelloProps, {}> {
    public render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
export interface IHelloProps { compiler: string; framework: string; }