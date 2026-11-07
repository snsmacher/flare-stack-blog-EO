/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Keys_HintInputs */

const zh_settings_design_keys_hint = /** @type {(inputs: Settings_Design_Keys_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为脚本和外部工具创建访问凭据。`)
};

const en_settings_design_keys_hint = /** @type {(inputs: Settings_Design_Keys_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create credentials for scripts and external tools.`)
};

/**
* | output |
* | --- |
* | "Create credentials for scripts and external tools." |
*
* @param {Settings_Design_Keys_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_keys_hint = /** @type {((inputs?: Settings_Design_Keys_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Keys_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_keys_hint(inputs)
	return zh_settings_design_keys_hint(inputs)
});