/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Media_Delete_OneInputs */

const zh_media_delete_one = /** @type {(inputs: Media_Delete_OneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`确定删除「${i?.name}」吗`)
};

const en_media_delete_one = /** @type {(inputs: Media_Delete_OneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Delete "${i?.name}"?`)
};

/**
* | output |
* | --- |
* | "Delete \"{name}\"?" |
*
* @param {Media_Delete_OneInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_delete_one = /** @type {((inputs: Media_Delete_OneInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Delete_OneInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_delete_one(inputs)
	return zh_media_delete_one(inputs)
});