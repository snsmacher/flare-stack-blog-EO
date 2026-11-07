/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Unmute_ConfirmInputs */

const zh_comments_unmute_confirm = /** @type {(inputs: Comments_Unmute_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认解禁`)
};

const en_comments_unmute_confirm = /** @type {(inputs: Comments_Unmute_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unmute`)
};

/**
* | output |
* | --- |
* | "Unmute" |
*
* @param {Comments_Unmute_ConfirmInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_unmute_confirm = /** @type {((inputs?: Comments_Unmute_ConfirmInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Unmute_ConfirmInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_unmute_confirm(inputs)
	return zh_comments_unmute_confirm(inputs)
});