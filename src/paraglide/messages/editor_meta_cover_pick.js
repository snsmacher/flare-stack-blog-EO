/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Meta_Cover_PickInputs */

const zh_editor_meta_cover_pick = /** @type {(inputs: Editor_Meta_Cover_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从媒体库选择`)
};

const en_editor_meta_cover_pick = /** @type {(inputs: Editor_Meta_Cover_PickInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose from library`)
};

/**
* | output |
* | --- |
* | "Choose from library" |
*
* @param {Editor_Meta_Cover_PickInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_meta_cover_pick = /** @type {((inputs?: Editor_Meta_Cover_PickInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Meta_Cover_PickInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_meta_cover_pick(inputs)
	return zh_editor_meta_cover_pick(inputs)
});