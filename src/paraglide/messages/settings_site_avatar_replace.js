/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Site_Avatar_ReplaceInputs */

const zh_settings_site_avatar_replace = /** @type {(inputs: Settings_Site_Avatar_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换头像`)
};

const en_settings_site_avatar_replace = /** @type {(inputs: Settings_Site_Avatar_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change Avatar`)
};

/**
* | output |
* | --- |
* | "Change Avatar" |
*
* @param {Settings_Site_Avatar_ReplaceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_site_avatar_replace = /** @type {((inputs?: Settings_Site_Avatar_ReplaceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Site_Avatar_ReplaceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_site_avatar_replace(inputs)
	return zh_settings_site_avatar_replace(inputs)
});