/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Nav_HintInputs */

const zh_settings_site_nav_hint = /** @type {(inputs: Settings_Site_Nav_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义博客顶部的导航链接（如关于、归档、友链等），最多支持 5 个。`)
};

const en_settings_site_nav_hint = /** @type {(inputs: Settings_Site_Nav_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom links displayed at the top of your blog (e.g. About, Archives, Friends), up to 5 items.`)
};

/**
* | output |
* | --- |
* | "Custom links displayed at the top of your blog (e.g. About, Archives, Friends), up to 5 items." |
*
* @param {Settings_Site_Nav_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_nav_hint = /** @type {((inputs?: Settings_Site_Nav_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Nav_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_nav_hint(inputs)
	return zh_settings_site_nav_hint(inputs)
});