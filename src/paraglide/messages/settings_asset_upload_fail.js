/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Upload_FailInputs */

const zh_settings_asset_upload_fail = /** @type {(inputs: Settings_Asset_Upload_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传失败`)
};

const en_settings_asset_upload_fail = /** @type {(inputs: Settings_Asset_Upload_FailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload failed`)
};

/**
* | output |
* | --- |
* | "Upload failed" |
*
* @param {Settings_Asset_Upload_FailInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_upload_fail = /** @type {((inputs?: Settings_Asset_Upload_FailInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Upload_FailInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_upload_fail(inputs)
	return zh_settings_asset_upload_fail(inputs)
});