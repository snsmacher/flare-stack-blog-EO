/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Unmute_TitleInputs */

const zh_comments_unmute_title = /** @type {(inputs: Comments_Unmute_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认解禁`)
};

const en_comments_unmute_title = /** @type {(inputs: Comments_Unmute_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unmute this user`)
};

/**
* | output |
* | --- |
* | "Unmute this user" |
*
* @param {Comments_Unmute_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_unmute_title = /** @type {((inputs?: Comments_Unmute_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Unmute_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_unmute_title(inputs)
	return zh_comments_unmute_title(inputs)
});