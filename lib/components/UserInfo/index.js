var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
// import './style/index.css'
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfo.prototype.render = function () {
        return React.createElement("h1", null,
            "UserInfo ",
            this.props.userName,
            "!");
    };
    return UserInfo;
}(React.Component));
export default UserInfo;
