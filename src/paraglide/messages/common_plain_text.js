/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Plain_TextInputs */

const zh_common_plain_text = /** @type {(inputs: Common_Plain_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`纯文本`)
};

const en_common_plain_text = /** @type {(inputs: Common_Plain_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plain Text`)
};

/**
* | output |
* | --- |
* | "Plain Text" |
*
* @param {Common_Plain_TextInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_plain_text = /** @type {((inputs?: Common_Plain_TextInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Plain_TextInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_plain_text(inputs)
	return zh_common_plain_text(inputs)
});