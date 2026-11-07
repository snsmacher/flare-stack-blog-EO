/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Manager_No_ResultsInputs */

const zh_muted_manager_no_results = /** @type {(inputs: Muted_Manager_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配的用户`)
};

const en_muted_manager_no_results = /** @type {(inputs: Muted_Manager_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matching users`)
};

/**
* | output |
* | --- |
* | "No matching users" |
*
* @param {Muted_Manager_No_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_no_results = /** @type {((inputs?: Muted_Manager_No_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_No_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_no_results(inputs)
	return zh_muted_manager_no_results(inputs)
});