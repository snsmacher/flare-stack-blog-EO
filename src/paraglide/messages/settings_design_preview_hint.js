/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Preview_HintInputs */

const zh_settings_design_preview_hint = /** @type {(inputs: Settings_Design_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以下为示例内容，实际邮件取决于触发事件。`)
};

const en_settings_design_preview_hint = /** @type {(inputs: Settings_Design_Preview_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Example content; actual emails depend on the triggering event.`)
};

/**
* | output |
* | --- |
* | "Example content; actual emails depend on the triggering event." |
*
* @param {Settings_Design_Preview_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_preview_hint = /** @type {((inputs?: Settings_Design_Preview_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Preview_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_preview_hint(inputs)
	return zh_settings_design_preview_hint(inputs)
});