declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;

declare module '*.svg' {
    // eslint-disable-next-line no-undef
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
