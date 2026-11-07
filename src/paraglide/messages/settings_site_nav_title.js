/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_TitleInputs */

const zh_settings_site_nav_title = /** @type {(inputs: Settings_Site_Nav_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`顶部导航菜单`)
};

const en_settings_site_nav_title = /** @type {(inputs: Settings_Site_Nav_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top Navigation Menu`)
};

/**
* | output |
* | --- |
* | "Top Navigation Menu" |
*
* @param {Settings_Site_Nav_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_title = /** @type {((inputs?: Settings_Site_Nav_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_title(inputs)
	return zh_settings_site_nav_title(inputs)
});