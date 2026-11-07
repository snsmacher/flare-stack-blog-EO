/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Start_NewInputs */

const zh_comments_start_new = /** @type {(inputs: Comments_Start_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写一条新评论…`)
};

const en_comments_start_new = /** @type {(inputs: Comments_Start_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write a new comment…`)
};

/**
* | output |
* | --- |
* | "Write a new comment…" |
*
* @param {Comments_Start_NewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_start_new = /** @type {((inputs?: Comments_Start_NewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Start_NewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_start_new(inputs)
	return zh_comments_start_new(inputs)
});