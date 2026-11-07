/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_OldestInputs */

const zh_muted_manager_oldest = /** @type {(inputs: Muted_Manager_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早禁言`)
};

const en_muted_manager_oldest = /** @type {(inputs: Muted_Manager_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest first`)
};

/**
* | output |
* | --- |
* | "Oldest first" |
*
* @param {Muted_Manager_OldestInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_oldest = /** @type {((inputs?: Muted_Manager_OldestInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_OldestInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_oldest(inputs)
	return zh_muted_manager_oldest(inputs)
});