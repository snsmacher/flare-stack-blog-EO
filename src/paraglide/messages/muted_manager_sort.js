/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_SortInputs */

const zh_muted_manager_sort = /** @type {(inputs: Muted_Manager_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const en_muted_manager_sort = /** @type {(inputs: Muted_Manager_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort`)
};

/**
* | output |
* | --- |
* | "Sort" |
*
* @param {Muted_Manager_SortInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_sort = /** @type {((inputs?: Muted_Manager_SortInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_SortInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_sort(inputs)
	return zh_muted_manager_sort(inputs)
});