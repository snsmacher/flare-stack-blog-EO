/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_UploadingInputs */

const zh_settings_asset_uploading = /** @type {(inputs: Settings_Asset_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传中...`)
};

const en_settings_asset_uploading = /** @type {(inputs: Settings_Asset_UploadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uploading...`)
};

/**
* | output |
* | --- |
* | "Uploading..." |
*
* @param {Settings_Asset_UploadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_uploading = /** @type {((inputs?: Settings_Asset_UploadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_UploadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_uploading(inputs)
	return zh_settings_asset_uploading(inputs)
});