/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_CollapseInputs */

const zh_common_collapse = /** @type {(inputs: Common_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起`)
};

const en_common_collapse = /** @type {(inputs: Common_CollapseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collapse`)
};

/**
* | output |
* | --- |
* | "Collapse" |
*
* @param {Common_CollapseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_collapse = /** @type {((inputs?: Common_CollapseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_CollapseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_collapse(inputs)
	return zh_common_collapse(inputs)
});