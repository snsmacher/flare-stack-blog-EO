/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Replies_FailedInputs */

const zh_comments_replies_failed = /** @type {(inputs: Comments_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复暂时无法加载。`)
};

const en_comments_replies_failed = /** @type {(inputs: Comments_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replies could not be loaded.`)
};

/**
* | output |
* | --- |
* | "Replies could not be loaded." |
*
* @param {Comments_Replies_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_replies_failed = /** @type {((inputs?: Comments_Replies_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Replies_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_replies_failed(inputs)
	return zh_comments_replies_failed(inputs)
});