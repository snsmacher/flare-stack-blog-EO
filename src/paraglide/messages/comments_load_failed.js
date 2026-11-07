/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Load_FailedInputs */

const zh_comments_load_failed = /** @type {(inputs: Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论暂时无法加载。`)
};

const en_comments_load_failed = /** @type {(inputs: Comments_Load_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments could not be loaded.`)
};

/**
* | output |
* | --- |
* | "Comments could not be loaded." |
*
* @param {Comments_Load_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_load_failed = /** @type {((inputs?: Comments_Load_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Load_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_load_failed(inputs)
	return zh_comments_load_failed(inputs)
});