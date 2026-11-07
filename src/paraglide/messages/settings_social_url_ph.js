/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_Url_PhInputs */

const zh_settings_social_url_ph = /** @type {(inputs: Settings_Social_Url_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人主页链接，如 https://...`)
};

const en_settings_social_url_ph = /** @type {(inputs: Settings_Social_Url_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile or page link, e.g. https://...`)
};

/**
* | output |
* | --- |
* | "Profile or page link, e.g. https://..." |
*
* @param {Settings_Social_Url_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_url_ph = /** @type {((inputs?: Settings_Social_Url_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_Url_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_url_ph(inputs)
	return zh_settings_social_url_ph(inputs)
});