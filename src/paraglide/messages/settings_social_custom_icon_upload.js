/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_Custom_Icon_UploadInputs */

const zh_settings_social_custom_icon_upload = /** @type {(inputs: Settings_Social_Custom_Icon_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上传图标`)
};

const en_settings_social_custom_icon_upload = /** @type {(inputs: Settings_Social_Custom_Icon_UploadInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upload Icon`)
};

/**
* | output |
* | --- |
* | "Upload Icon" |
*
* @param {Settings_Social_Custom_Icon_UploadInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_custom_icon_upload = /** @type {((inputs?: Settings_Social_Custom_Icon_UploadInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_Custom_Icon_UploadInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_custom_icon_upload(inputs)
	return zh_settings_social_custom_icon_upload(inputs)
});