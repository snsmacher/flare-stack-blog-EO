/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Copy_FailedInputs */

const zh_settings_design_copy_failed = /** @type {(inputs: Settings_Design_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败，请手动复制密钥。`)
};

const en_settings_design_copy_failed = /** @type {(inputs: Settings_Design_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy failed. Please copy the key manually.`)
};

/**
* | output |
* | --- |
* | "Copy failed. Please copy the key manually." |
*
* @param {Settings_Design_Copy_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_copy_failed = /** @type {((inputs?: Settings_Design_Copy_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Copy_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_copy_failed(inputs)
	return zh_settings_design_copy_failed(inputs)
});