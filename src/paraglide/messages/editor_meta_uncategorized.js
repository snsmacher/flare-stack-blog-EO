/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_UncategorizedInputs */

const zh_editor_meta_uncategorized = /** @type {(inputs: Editor_Meta_UncategorizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未分类`)
};

const en_editor_meta_uncategorized = /** @type {(inputs: Editor_Meta_UncategorizedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uncategorized`)
};

/**
* | output |
* | --- |
* | "Uncategorized" |
*
* @param {Editor_Meta_UncategorizedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_uncategorized = /** @type {((inputs?: Editor_Meta_UncategorizedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_UncategorizedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_uncategorized(inputs)
	return zh_editor_meta_uncategorized(inputs)
});