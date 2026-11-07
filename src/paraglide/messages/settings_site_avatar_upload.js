/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Avatar_UploadInputs */

const zh_settings_site_avatar_upload = /** @type {(inputs: Settings_Site_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传头像`)
};

const en_settings_site_avatar_upload = /** @type {(inputs: Settings_Site_Avatar_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Avatar`)
};

/**
* | output |
* | --- |
* | "Upload Avatar" |
*
* @param {Settings_Site_Avatar_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_avatar_upload = /** @type {((inputs?: Settings_Site_Avatar_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Avatar_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_avatar_upload(inputs)
	return zh_settings_site_avatar_upload(inputs)
});