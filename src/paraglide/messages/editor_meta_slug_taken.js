/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Slug_TakenInputs */

const zh_editor_meta_slug_taken = /** @type {(inputs: Editor_Meta_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该链接已被其他文章使用（不区分大小写与全角半角）。更换前，链接不会保存。`)
};

const en_editor_meta_slug_taken = /** @type {(inputs: Editor_Meta_Slug_TakenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another post already uses this link (ignoring case and full-width letters). Choose another to save it.`)
};

/**
* | output |
* | --- |
* | "Another post already uses this link (ignoring case and full-width letters). Choose another to save it." |
*
* @param {Editor_Meta_Slug_TakenInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_slug_taken = /** @type {((inputs?: Editor_Meta_Slug_TakenInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Slug_TakenInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_slug_taken(inputs)
	return zh_editor_meta_slug_taken(inputs)
});