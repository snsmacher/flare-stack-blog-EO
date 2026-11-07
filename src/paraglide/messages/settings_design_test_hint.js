/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Test_HintInputs */

const zh_settings_design_test_hint = /** @type {(inputs: Settings_Design_Test_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试使用当前输入，不会保存设置。`)
};

const en_settings_design_test_hint = /** @type {(inputs: Settings_Design_Test_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tests use your current input and do not save settings.`)
};

/**
* | output |
* | --- |
* | "Tests use your current input and do not save settings." |
*
* @param {Settings_Design_Test_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_test_hint = /** @type {((inputs?: Settings_Design_Test_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Test_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_test_hint(inputs)
	return zh_settings_design_test_hint(inputs)
});