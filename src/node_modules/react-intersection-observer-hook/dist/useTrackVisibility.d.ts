import { IntersectionObserverHookArgs, IntersectionObserverHookResult } from './useIntersectionObserver';
export declare type TrackVisibilityHookArgs = IntersectionObserverHookArgs;
export declare type TrackVisibilityHookResult = [IntersectionObserverHookResult[0], IntersectionObserverHookResult[1] & {
    isVisible: boolean;
    wasEverVisible: boolean;
}];
declare function useTrackVisibility(args?: IntersectionObserverHookArgs): TrackVisibilityHookResult;
export default useTrackVisibility;
