/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Import_FailInputs */

const zh_media_import_fail = /** @type {(inputs: Media_Import_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法导入这张图片`)
};

const en_media_import_fail = /** @type {(inputs: Media_Import_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't import that image`)
};

/**
* | output |
* | --- |
* | "Couldn't import that image" |
*
* @param {Media_Import_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_import_fail = /** @type {((inputs?: Media_Import_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Import_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_import_fail(inputs)
	return zh_media_import_fail(inputs)
});