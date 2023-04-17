export interface IComponentProps {
    [key: string]: any
}

export type TComponentFunction = (...args: any[]) => Element | null

export interface IRoute{
    path: string;
    root: TComponentFunction
}