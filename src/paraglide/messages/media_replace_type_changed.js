/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Replace_Type_ChangedInputs */

const zh_media_replace_type_changed = /** @type {(inputs: Media_Replace_Type_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`替换文件须与原图格式相同（如 PNG 只能替换为 PNG）`)
};

const en_media_replace_type_changed = /** @type {(inputs: Media_Replace_Type_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The new file must be the same image type as the original (a PNG can only be replaced by a PNG)`)
};

/**
* | output |
* | --- |
* | "The new file must be the same image type as the original (a PNG can only be replaced by a PNG)" |
*
* @param {Media_Replace_Type_ChangedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_replace_type_changed = /** @type {((inputs?: Media_Replace_Type_ChangedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Replace_Type_ChangedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_replace_type_changed(inputs)
	return zh_media_replace_type_changed(inputs)
});