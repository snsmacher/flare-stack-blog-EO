/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_LocatingInputs */

const zh_comments_locating = /** @type {(inputs: Comments_LocatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在定位评论`)
};

const en_comments_locating = /** @type {(inputs: Comments_LocatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Locating comment...`)
};

/**
* | output |
* | --- |
* | "Locating comment..." |
*
* @param {Comments_LocatingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_locating = /** @type {((inputs?: Comments_LocatingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_LocatingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_locating(inputs)
	return zh_comments_locating(inputs)
});