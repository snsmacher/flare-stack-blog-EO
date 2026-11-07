/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Popular_SyncInputs */

const zh_dashboard_popular_sync = /** @type {(inputs: Dashboard_Popular_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`去同步`)
};

const en_dashboard_popular_sync = /** @type {(inputs: Dashboard_Popular_SyncInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sync now`)
};

/**
* | output |
* | --- |
* | "Sync now" |
*
* @param {Dashboard_Popular_SyncInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_popular_sync = /** @type {((inputs?: Dashboard_Popular_SyncInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Popular_SyncInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_popular_sync(inputs)
	return zh_dashboard_popular_sync(inputs)
});