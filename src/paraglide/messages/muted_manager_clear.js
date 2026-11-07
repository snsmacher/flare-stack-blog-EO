/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_ClearInputs */

const zh_muted_manager_clear = /** @type {(inputs: Muted_Manager_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除搜索`)
};

const en_muted_manager_clear = /** @type {(inputs: Muted_Manager_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Muted_Manager_ClearInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_clear = /** @type {((inputs?: Muted_Manager_ClearInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_ClearInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_clear(inputs)
	return zh_muted_manager_clear(inputs)
});