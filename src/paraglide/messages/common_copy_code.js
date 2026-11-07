/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Copy_CodeInputs */

const zh_common_copy_code = /** @type {(inputs: Common_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制代码`)
};

const en_common_copy_code = /** @type {(inputs: Common_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy code`)
};

/**
* | output |
* | --- |
* | "Copy code" |
*
* @param {Common_Copy_CodeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_copy_code = /** @type {((inputs?: Common_Copy_CodeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Copy_CodeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_copy_code(inputs)
	return zh_common_copy_code(inputs)
});