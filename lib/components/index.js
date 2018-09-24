/* @remove-on-es-build-begin */
// this file is not used if use https://github.com/ant-design/babel-plugin-import
var ENV = process.env.NODE_ENV;
if (ENV !== 'production' &&
    ENV !== 'test' &&
    typeof console !== 'undefined' &&
    // tslint:disable-next-line:no-console
    console.warn &&
    typeof window !== 'undefined') {
    // tslint:disable-next-line:no-console
    console.warn('You are using a whole package of antd, ' +
        'please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.');
}
/* @remove-on-es-build-end */
export { default as Hello } from './Hello';
export { default as Main } from './Main';
export { default as UserInfo } from './UserInfo';
