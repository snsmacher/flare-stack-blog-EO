/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Preview_TitleInputs */

const zh_media_preview_title = /** @type {(inputs: Media_Preview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件预览`)
};

const en_media_preview_title = /** @type {(inputs: Media_Preview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File preview`)
};

/**
* | output |
* | --- |
* | "File preview" |
*
* @param {Media_Preview_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_preview_title = /** @type {((inputs?: Media_Preview_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Preview_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_preview_title(inputs)
	return zh_media_preview_title(inputs)
});