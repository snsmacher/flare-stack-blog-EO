/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_ReplaceInputs */

const zh_settings_replace = /** @type {(inputs: Settings_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更换`)
};

const en_settings_replace = /** @type {(inputs: Settings_ReplaceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Replace`)
};

/**
* | output |
* | --- |
* | "Replace" |
*
* @param {Settings_ReplaceInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_replace = /** @type {((inputs?: Settings_ReplaceInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_ReplaceInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_replace(inputs)
	return zh_settings_replace(inputs)
});