/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Banner_ReplaceInputs */

const zh_settings_site_banner_replace = /** @type {(inputs: Settings_Site_Banner_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换封面背景`)
};

const en_settings_site_banner_replace = /** @type {(inputs: Settings_Site_Banner_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change Banner`)
};

/**
* | output |
* | --- |
* | "Change Banner" |
*
* @param {Settings_Site_Banner_ReplaceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_banner_replace = /** @type {((inputs?: Settings_Site_Banner_ReplaceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Banner_ReplaceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_banner_replace(inputs)
	return zh_settings_site_banner_replace(inputs)
});