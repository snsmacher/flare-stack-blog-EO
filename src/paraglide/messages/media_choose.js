/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_ChooseInputs */

const zh_media_choose = /** @type {(inputs: Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择图片`)
};

const en_media_choose = /** @type {(inputs: Media_ChooseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose images`)
};

/**
* | output |
* | --- |
* | "Choose images" |
*
* @param {Media_ChooseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_choose = /** @type {((inputs?: Media_ChooseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_ChooseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_choose(inputs)
	return zh_media_choose(inputs)
});