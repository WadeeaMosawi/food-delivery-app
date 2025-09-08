// TypeScript declaration file for importing image assets
// This tells TypeScript how to handle non-code file imports like .png, .jpg, .svg, etc.
// Without this, TypeScript would throw errors when importing images.
declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.jpeg" {
    const value: any;
    export default value;
}

declare module "*.gif" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}