/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_DeletedInputs */

const zh_media_deleted = /** @type {(inputs: Media_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已删除`)
};

const en_media_deleted = /** @type {(inputs: Media_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted`)
};

/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Media_DeletedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_deleted = /** @type {((inputs?: Media_DeletedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_DeletedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_deleted(inputs)
	return zh_media_deleted(inputs)
});