/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Upload_SuccessInputs */

const zh_settings_asset_upload_success = /** @type {(inputs: Settings_Asset_Upload_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图片上传成功`)
};

const en_settings_asset_upload_success = /** @type {(inputs: Settings_Asset_Upload_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Image uploaded successfully`)
};

/**
* | output |
* | --- |
* | "Image uploaded successfully" |
*
* @param {Settings_Asset_Upload_SuccessInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_upload_success = /** @type {((inputs?: Settings_Asset_Upload_SuccessInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Upload_SuccessInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_upload_success(inputs)
	return zh_settings_asset_upload_success(inputs)
});