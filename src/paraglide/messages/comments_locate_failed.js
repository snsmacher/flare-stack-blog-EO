/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Locate_FailedInputs */

const zh_comments_locate_failed = /** @type {(inputs: Comments_Locate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到对应的评论`)
};

const en_comments_locate_failed = /** @type {(inputs: Comments_Locate_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment could not be found`)
};

/**
* | output |
* | --- |
* | "Comment could not be found" |
*
* @param {Comments_Locate_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_locate_failed = /** @type {((inputs?: Comments_Locate_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Locate_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_locate_failed(inputs)
	return zh_comments_locate_failed(inputs)
});