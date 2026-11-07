/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_HeadingInputs */

const zh_comments_heading = /** @type {(inputs: Comments_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const en_comments_heading = /** @type {(inputs: Comments_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Comments_HeadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_heading = /** @type {((inputs?: Comments_HeadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_HeadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_heading(inputs)
	return zh_comments_heading(inputs)
});