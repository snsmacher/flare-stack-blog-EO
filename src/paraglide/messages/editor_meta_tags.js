/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_TagsInputs */

const zh_editor_meta_tags = /** @type {(inputs: Editor_Meta_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const en_editor_meta_tags = /** @type {(inputs: Editor_Meta_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Editor_Meta_TagsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_tags = /** @type {((inputs?: Editor_Meta_TagsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_TagsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_tags(inputs)
	return zh_editor_meta_tags(inputs)
});