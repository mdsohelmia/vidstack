import { VdsEvent } from '../events';

export type FullscreenEvents = {
  'vds-fullscreen-change': FullscreenChangeEvent;
  'vds-fullscreen-error': FullscreenErrorEvent;
};

/**
 * Fired when an element enters/exits fullscreen. The event detail is a `boolean` indicating
 * if fullscreen was entered (`true`) or exited (`false`).
 *
 * @event
 * @bubbles
 * @composed
 */
export type FullscreenChangeEvent = VdsEvent<boolean>;

/**
 * Fired when an error occurs either entering or exiting fullscreen. This will generally occur
 * if the user has not interacted with the page yet.
 *
 * @event
 * @bubbles
 * @composed
 */
export type FullscreenErrorEvent = VdsEvent<unknown>;
