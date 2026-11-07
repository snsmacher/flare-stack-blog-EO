/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Code_CopiedInputs */

const zh_common_code_copied = /** @type {(inputs: Common_Code_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制代码`)
};

const en_common_code_copied = /** @type {(inputs: Common_Code_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code copied`)
};

/**
* | output |
* | --- |
* | "Code copied" |
*
* @param {Common_Code_CopiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_code_copied = /** @type {((inputs?: Common_Code_CopiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Code_CopiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_code_copied(inputs)
	return zh_common_code_copied(inputs)
});