/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Invalid_Background_Image_RefInputs */

const zh_settings_site_validation_invalid_background_image_ref = /** @type {(inputs: Settings_Site_Validation_Invalid_Background_Image_RefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入以 / 开头的站内资源路径或有效的 http(s) 图片链接`)
};

const en_settings_site_validation_invalid_background_image_ref = /** @type {(inputs: Settings_Site_Validation_Invalid_Background_Image_RefInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a root-relative site asset path or a valid http(s) image URL`)
};

/**
* | output |
* | --- |
* | "Please enter a root-relative site asset path or a valid http(s) image URL" |
*
* @param {Settings_Site_Validation_Invalid_Background_Image_RefInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_invalid_background_image_ref = /** @type {((inputs?: Settings_Site_Validation_Invalid_Background_Image_RefInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Invalid_Background_Image_RefInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_invalid_background_image_ref(inputs)
	return zh_settings_site_validation_invalid_background_image_ref(inputs)
});