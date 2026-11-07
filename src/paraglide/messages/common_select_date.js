/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Select_DateInputs */

const zh_common_select_date = /** @type {(inputs: Common_Select_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择日期`)
};

const en_common_select_date = /** @type {(inputs: Common_Select_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select date`)
};

/**
* | output |
* | --- |
* | "Select date" |
*
* @param {Common_Select_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_select_date = /** @type {((inputs?: Common_Select_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Select_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_select_date(inputs)
	return zh_common_select_date(inputs)
});