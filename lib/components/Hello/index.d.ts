import * as React from "react";
import './style/index.css';
export default class Hello extends React.Component<IHelloProps, {}> {
    render(): JSX.Element;
}
export interface IHelloProps {
    compiler: string;
    framework: string;
}
