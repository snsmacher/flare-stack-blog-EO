/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Cover_ChangeInputs */

const zh_editor_meta_cover_change = /** @type {(inputs: Editor_Meta_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换`)
};

const en_editor_meta_cover_change = /** @type {(inputs: Editor_Meta_Cover_ChangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace`)
};

/**
* | output |
* | --- |
* | "Replace" |
*
* @param {Editor_Meta_Cover_ChangeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_cover_change = /** @type {((inputs?: Editor_Meta_Cover_ChangeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Cover_ChangeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_cover_change(inputs)
	return zh_editor_meta_cover_change(inputs)
});