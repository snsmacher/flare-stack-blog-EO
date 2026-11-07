/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Header_TitleInputs */

const zh_settings_header_title = /** @type {(inputs: Settings_Header_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统设置`)
};

const en_settings_header_title = /** @type {(inputs: Settings_Header_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`System Settings`)
};

/**
* | output |
* | --- |
* | "System Settings" |
*
* @param {Settings_Header_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_header_title = /** @type {((inputs?: Settings_Header_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Header_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_header_title(inputs)
	return zh_settings_header_title(inputs)
});