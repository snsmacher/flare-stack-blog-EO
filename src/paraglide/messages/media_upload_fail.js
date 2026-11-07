/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Media_Upload_FailInputs */

const zh_media_upload_fail = /** @type {(inputs: Media_Upload_FailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`上传失败: ${i?.name}`)
};

const en_media_upload_fail = /** @type {(inputs: Media_Upload_FailInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upload failed: ${i?.name}`)
};

/**
* | name | output |
* | --- | --- |
* | * | "Upload failed: {name}" |
*
* @param {Media_Upload_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_upload_fail = /** @type {((inputs: Media_Upload_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Upload_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_upload_fail(inputs)
	return zh_media_upload_fail(inputs)
});