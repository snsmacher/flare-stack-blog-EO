/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_Label_PhInputs */

const zh_settings_site_nav_label_ph = /** @type {(inputs: Settings_Site_Nav_Label_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如：关于`)
};

const en_settings_site_nav_label_ph = /** @type {(inputs: Settings_Site_Nav_Label_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`e.g. About`)
};

/**
* | output |
* | --- |
* | "e.g. About" |
*
* @param {Settings_Site_Nav_Label_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_label_ph = /** @type {((inputs?: Settings_Site_Nav_Label_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_Label_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_label_ph(inputs)
	return zh_settings_site_nav_label_ph(inputs)
});