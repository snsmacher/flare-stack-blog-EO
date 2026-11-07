/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_ConfirmInputs */

const zh_common_confirm = /** @type {(inputs: Common_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认`)
};

const en_common_confirm = /** @type {(inputs: Common_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm`)
};

/**
* | output |
* | --- |
* | "Confirm" |
*
* @param {Common_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const common_confirm = /** @type {((inputs?: Common_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_confirm(inputs)
	return zh_common_confirm(inputs)
});