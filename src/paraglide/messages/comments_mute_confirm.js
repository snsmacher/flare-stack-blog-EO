/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Mute_ConfirmInputs */

const zh_comments_mute_confirm = /** @type {(inputs: Comments_Mute_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认禁言`)
};

const en_comments_mute_confirm = /** @type {(inputs: Comments_Mute_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute`)
};

/**
* | output |
* | --- |
* | "Mute" |
*
* @param {Comments_Mute_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_mute_confirm = /** @type {((inputs?: Comments_Mute_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Mute_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_mute_confirm(inputs)
	return zh_comments_mute_confirm(inputs)
});