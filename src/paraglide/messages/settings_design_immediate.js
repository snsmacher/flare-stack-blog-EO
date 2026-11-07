/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_ImmediateInputs */

const zh_settings_design_immediate = /** @type {(inputs: Settings_Design_ImmediateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作即时执行，结果显示在对应项目下。`)
};

const en_settings_design_immediate = /** @type {(inputs: Settings_Design_ImmediateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions take effect immediately; results appear alongside each action.`)
};

/**
* | output |
* | --- |
* | "Actions take effect immediately; results appear alongside each action." |
*
* @param {Settings_Design_ImmediateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_immediate = /** @type {((inputs?: Settings_Design_ImmediateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_ImmediateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_immediate(inputs)
	return zh_settings_design_immediate(inputs)
});