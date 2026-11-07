/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Site_Validation_Too_LongInputs */

const zh_settings_site_validation_too_long = /** @type {(inputs: Settings_Site_Validation_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最长${i?.max}字`)
};

const en_settings_site_validation_too_long = /** @type {(inputs: Settings_Site_Validation_Too_LongInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximum ${i?.max} characters`)
};

/**
* | max | output |
* | --- | --- |
* | * | "Maximum {max} characters" |
*
* @param {Settings_Site_Validation_Too_LongInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_validation_too_long = /** @type {((inputs: Settings_Site_Validation_Too_LongInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Validation_Too_LongInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_validation_too_long(inputs)
	return zh_settings_site_validation_too_long(inputs)
});