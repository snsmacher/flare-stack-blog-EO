/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Media_UploadingInputs */

const zh_media_uploading = /** @type {(inputs: Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`正在上传 ${i?.current}/${i?.total}`)
};

const en_media_uploading = /** @type {(inputs: Media_UploadingInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uploading ${i?.current}/${i?.total}`)
};

/**
* | output |
* | --- |
* | "Uploading {current}/{total}" |
*
* @param {Media_UploadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_uploading = /** @type {((inputs: Media_UploadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_UploadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_uploading(inputs)
	return zh_media_uploading(inputs)
});