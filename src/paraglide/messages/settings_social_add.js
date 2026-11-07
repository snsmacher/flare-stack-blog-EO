/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Social_AddInputs */

const zh_settings_social_add = /** @type {(inputs: Settings_Social_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加社交账号`)
};

const en_settings_social_add = /** @type {(inputs: Settings_Social_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add social link`)
};

/**
* | output |
* | --- |
* | "Add social link" |
*
* @param {Settings_Social_AddInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_social_add = /** @type {((inputs?: Settings_Social_AddInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Social_AddInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_social_add(inputs)
	return zh_settings_social_add(inputs)
});