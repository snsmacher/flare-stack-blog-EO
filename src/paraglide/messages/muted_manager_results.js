/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ shown: NonNullable<unknown>, total: NonNullable<unknown> }} Muted_Manager_ResultsInputs */

const zh_muted_manager_results = /** @type {(inputs: Muted_Manager_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示 ${i?.shown} 人，共 ${i?.total} 人`)
};

const en_muted_manager_results = /** @type {(inputs: Muted_Manager_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Showing ${i?.shown} of ${i?.total} users`)
};

/**
* | output |
* | --- |
* | "Showing {shown} of {total} users" |
*
* @param {Muted_Manager_ResultsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_manager_results = /** @type {((inputs: Muted_Manager_ResultsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Manager_ResultsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_manager_results(inputs)
	return zh_muted_manager_results(inputs)
});