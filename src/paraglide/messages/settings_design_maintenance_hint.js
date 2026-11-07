/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Maintenance_HintInputs */

const zh_settings_design_maintenance_hint = /** @type {(inputs: Settings_Design_Maintenance_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按需检查、同步与刷新。`)
};

const en_settings_design_maintenance_hint = /** @type {(inputs: Settings_Design_Maintenance_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check, sync and refresh when needed.`)
};

/**
* | output |
* | --- |
* | "Check, sync and refresh when needed." |
*
* @param {Settings_Design_Maintenance_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_maintenance_hint = /** @type {((inputs?: Settings_Design_Maintenance_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Maintenance_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_maintenance_hint(inputs)
	return zh_settings_design_maintenance_hint(inputs)
});