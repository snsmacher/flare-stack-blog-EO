/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Post_EditInputs */

const zh_post_edit = /** @type {(inputs: Post_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑文章`)
};

const en_post_edit = /** @type {(inputs: Post_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Post`)
};

/**
* | output |
* | --- |
* | "Edit Post" |
*
* @param {Post_EditInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_edit = /** @type {((inputs?: Post_EditInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_EditInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_edit(inputs)
	return zh_post_edit(inputs)
});