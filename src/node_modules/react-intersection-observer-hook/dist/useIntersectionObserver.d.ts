import { Omit } from './types';
export declare type IntersectionObserverHookArgs = Omit<IntersectionObserverInit, 'root'>;
export declare type IntersectionObserverHookRefCallbackNode = Element | null;
export declare type IntersectionObserverHookRefCallback = (node: IntersectionObserverHookRefCallbackNode) => void;
export declare type IntersectionObserverHookRootRefCallbackNode = IntersectionObserverInit['root'];
export declare type IntersectionObserverHookRootRefCallback = (node: IntersectionObserverHookRootRefCallbackNode) => void;
export declare type IntersectionObserverHookResult = [IntersectionObserverHookRefCallback, {
    entry: IntersectionObserverEntry | undefined;
    rootRef: IntersectionObserverHookRootRefCallback;
}];
declare function useIntersectionObserver(args?: IntersectionObserverHookArgs): IntersectionObserverHookResult;
export default useIntersectionObserver;
