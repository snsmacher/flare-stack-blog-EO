/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Validation_Nav_Label_RequiredInputs */

const zh_settings_site_validation_nav_label_required = /** @type {(inputs: Settings_Site_Validation_Nav_Label_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请填写导航名称`)
};

const en_settings_site_validation_nav_label_required = /** @type {(inputs: Settings_Site_Validation_Nav_Label_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a navigation label`)
};

/**
* | output |
* | --- |
* | "Please enter a navigation label" |
*
* @param {Settings_Site_Validation_Nav_Label_RequiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_nav_label_required = /** @type {((inputs?: Settings_Site_Validation_Nav_Label_RequiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Nav_Label_RequiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_nav_label_required(inputs)
	return zh_settings_site_validation_nav_label_required(inputs)
});