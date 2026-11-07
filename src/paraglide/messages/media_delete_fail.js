/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Delete_FailInputs */

const zh_media_delete_fail = /** @type {(inputs: Media_Delete_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除失败，请重试`)
};

const en_media_delete_fail = /** @type {(inputs: Media_Delete_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not delete the images. Try again.`)
};

/**
* | output |
* | --- |
* | "Could not delete the images. Try again." |
*
* @param {Media_Delete_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_delete_fail = /** @type {((inputs?: Media_Delete_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Delete_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_delete_fail(inputs)
	return zh_media_delete_fail(inputs)
});