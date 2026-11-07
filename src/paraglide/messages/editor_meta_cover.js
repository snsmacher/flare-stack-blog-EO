/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_CoverInputs */

const zh_editor_meta_cover = /** @type {(inputs: Editor_Meta_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const en_editor_meta_cover = /** @type {(inputs: Editor_Meta_CoverInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Editor_Meta_CoverInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_cover = /** @type {((inputs?: Editor_Meta_CoverInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_CoverInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_cover(inputs)
	return zh_editor_meta_cover(inputs)
});