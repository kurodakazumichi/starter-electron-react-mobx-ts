import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles.scss'

alert((window as any).test());
const Header = <h1>hello electron webpack</h1>;

ReactDOM.render(Header, document.getElementById("app"));