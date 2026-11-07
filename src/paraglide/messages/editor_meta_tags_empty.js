/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Tags_EmptyInputs */

const zh_editor_meta_tags_empty = /** @type {(inputs: Editor_Meta_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未设置标签`)
};

const en_editor_meta_tags_empty = /** @type {(inputs: Editor_Meta_Tags_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tags`)
};

/**
* | output |
* | --- |
* | "No tags" |
*
* @param {Editor_Meta_Tags_EmptyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_tags_empty = /** @type {((inputs?: Editor_Meta_Tags_EmptyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Tags_EmptyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_tags_empty(inputs)
	return zh_editor_meta_tags_empty(inputs)
});