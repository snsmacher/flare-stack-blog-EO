/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Category_CreateInputs */

const zh_editor_meta_category_create = /** @type {(inputs: Editor_Meta_Category_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ 新建分类…`)
};

const en_editor_meta_category_create = /** @type {(inputs: Editor_Meta_Category_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`+ New category…`)
};

/**
* | output |
* | --- |
* | "+ New category…" |
*
* @param {Editor_Meta_Category_CreateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_category_create = /** @type {((inputs?: Editor_Meta_Category_CreateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Category_CreateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_category_create(inputs)
	return zh_editor_meta_category_create(inputs)
});