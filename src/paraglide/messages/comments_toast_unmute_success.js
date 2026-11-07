/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Unmute_SuccessInputs */

const zh_comments_toast_unmute_success = /** @type {(inputs: Comments_Toast_Unmute_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已解禁`)
};

const en_comments_toast_unmute_success = /** @type {(inputs: Comments_Toast_Unmute_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User unmuted`)
};

/**
* | output |
* | --- |
* | "User unmuted" |
*
* @param {Comments_Toast_Unmute_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_unmute_success = /** @type {((inputs?: Comments_Toast_Unmute_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Unmute_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_unmute_success(inputs)
	return zh_comments_toast_unmute_success(inputs)
});