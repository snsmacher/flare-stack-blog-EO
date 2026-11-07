/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Mute_TitleInputs */

const zh_comments_mute_title = /** @type {(inputs: Comments_Mute_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认禁言`)
};

const en_comments_mute_title = /** @type {(inputs: Comments_Mute_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute this user`)
};

/**
* | output |
* | --- |
* | "Mute this user" |
*
* @param {Comments_Mute_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_mute_title = /** @type {((inputs?: Comments_Mute_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Mute_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_mute_title(inputs)
	return zh_comments_mute_title(inputs)
});