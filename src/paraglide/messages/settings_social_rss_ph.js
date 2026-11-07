/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_Rss_PhInputs */

const zh_settings_social_rss_ph = /** @type {(inputs: Settings_Social_Rss_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`订阅源路径或网址，如：/atom.xml`)
};

const en_settings_social_rss_ph = /** @type {(inputs: Settings_Social_Rss_PhInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feed path or URL, e.g. /atom.xml`)
};

/**
* | output |
* | --- |
* | "Feed path or URL, e.g. /atom.xml" |
*
* @param {Settings_Social_Rss_PhInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_rss_ph = /** @type {((inputs?: Settings_Social_Rss_PhInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_Rss_PhInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_rss_ph(inputs)
	return zh_settings_social_rss_ph(inputs)
});