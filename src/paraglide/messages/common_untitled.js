/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_UntitledInputs */

const zh_common_untitled = /** @type {(inputs: Common_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未命名`)
};

const en_common_untitled = /** @type {(inputs: Common_UntitledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Untitled`)
};

/**
* | output |
* | --- |
* | "Untitled" |
*
* @param {Common_UntitledInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_untitled = /** @type {((inputs?: Common_UntitledInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_UntitledInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_untitled(inputs)
	return zh_common_untitled(inputs)
});