/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_RecentInputs */

const zh_muted_manager_recent = /** @type {(inputs: Muted_Manager_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近禁言`)
};

const en_muted_manager_recent = /** @type {(inputs: Muted_Manager_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest first`)
};

/**
* | output |
* | --- |
* | "Newest first" |
*
* @param {Muted_Manager_RecentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_recent = /** @type {((inputs?: Muted_Manager_RecentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_RecentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_recent(inputs)
	return zh_muted_manager_recent(inputs)
});