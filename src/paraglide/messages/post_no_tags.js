/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_No_TagsInputs */

const zh_post_no_tags = /** @type {(inputs: Post_No_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无标签`)
};

const en_post_no_tags = /** @type {(inputs: Post_No_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags`)
};

/**
* | output |
* | --- |
* | "No tags" |
*
* @param {Post_No_TagsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_no_tags = /** @type {((inputs?: Post_No_TagsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_No_TagsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_no_tags(inputs)
	return zh_post_no_tags(inputs)
});