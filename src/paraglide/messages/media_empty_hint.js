/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Empty_HintInputs */

const zh_media_empty_hint = /** @type {(inputs: Media_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拖到这里，或选择图片`)
};

const en_media_empty_hint = /** @type {(inputs: Media_Empty_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Drop images here, or choose files`)
};

/**
* | output |
* | --- |
* | "Drop images here, or choose files" |
*
* @param {Media_Empty_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_empty_hint = /** @type {((inputs?: Media_Empty_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Empty_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_empty_hint(inputs)
	return zh_media_empty_hint(inputs)
});