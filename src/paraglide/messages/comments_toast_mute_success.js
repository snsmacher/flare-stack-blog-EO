/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Mute_SuccessInputs */

const zh_comments_toast_mute_success = /** @type {(inputs: Comments_Toast_Mute_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已禁言`)
};

const en_comments_toast_mute_success = /** @type {(inputs: Comments_Toast_Mute_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User muted`)
};

/**
* | output |
* | --- |
* | "User muted" |
*
* @param {Comments_Toast_Mute_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_mute_success = /** @type {((inputs?: Comments_Toast_Mute_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Mute_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_mute_success(inputs)
	return zh_comments_toast_mute_success(inputs)
});