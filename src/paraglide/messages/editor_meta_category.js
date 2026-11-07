/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_CategoryInputs */

const zh_editor_meta_category = /** @type {(inputs: Editor_Meta_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const en_editor_meta_category = /** @type {(inputs: Editor_Meta_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Editor_Meta_CategoryInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_category = /** @type {((inputs?: Editor_Meta_CategoryInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_CategoryInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_category(inputs)
	return zh_editor_meta_category(inputs)
});