/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_TocInputs */

const zh_post_toc = /** @type {(inputs: Post_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`目录`)
};

const en_post_toc = /** @type {(inputs: Post_TocInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Table of contents`)
};

/**
* | output |
* | --- |
* | "Table of contents" |
*
* @param {Post_TocInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_toc = /** @type {((inputs?: Post_TocInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_TocInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_toc(inputs)
	return zh_post_toc(inputs)
});