/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Asset_Upload_BtnInputs */

const zh_settings_asset_upload_btn = /** @type {(inputs: Settings_Asset_Upload_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传`)
};

const en_settings_asset_upload_btn = /** @type {(inputs: Settings_Asset_Upload_BtnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload`)
};

/**
* | output |
* | --- |
* | "Upload" |
*
* @param {Settings_Asset_Upload_BtnInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_asset_upload_btn = /** @type {((inputs?: Settings_Asset_Upload_BtnInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Asset_Upload_BtnInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_asset_upload_btn(inputs)
	return zh_settings_asset_upload_btn(inputs)
});