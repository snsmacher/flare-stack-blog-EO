/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Hue_RangeInputs */

const zh_settings_site_validation_hue_range = /** @type {(inputs: Settings_Site_Validation_Hue_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取值范围应在 0 到 360 之间`)
};

const en_settings_site_validation_hue_range = /** @type {(inputs: Settings_Site_Validation_Hue_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Value must be between 0 and 360`)
};

/**
* | output |
* | --- |
* | "Value must be between 0 and 360" |
*
* @param {Settings_Site_Validation_Hue_RangeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_hue_range = /** @type {((inputs?: Settings_Site_Validation_Hue_RangeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Hue_RangeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_hue_range(inputs)
	return zh_settings_site_validation_hue_range(inputs)
});