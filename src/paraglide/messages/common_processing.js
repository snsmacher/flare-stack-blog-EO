/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_ProcessingInputs */

const zh_common_processing = /** @type {(inputs: Common_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处理中...`)
};

const en_common_processing = /** @type {(inputs: Common_ProcessingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processing...`)
};

/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {Common_ProcessingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_processing = /** @type {((inputs?: Common_ProcessingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_ProcessingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_processing(inputs)
	return zh_common_processing(inputs)
});