/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_DiscardInputs */

const zh_settings_design_discard = /** @type {(inputs: Settings_Design_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`放弃修改`)
};

const en_settings_design_discard = /** @type {(inputs: Settings_Design_DiscardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard changes`)
};

/**
* | output |
* | --- |
* | "Discard changes" |
*
* @param {Settings_Design_DiscardInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_discard = /** @type {((inputs?: Settings_Design_DiscardInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_DiscardInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_discard(inputs)
	return zh_settings_design_discard(inputs)
});