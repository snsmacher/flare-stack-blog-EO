/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_SavingInputs */

const zh_settings_saving = /** @type {(inputs: Settings_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中`)
};

const en_settings_saving = /** @type {(inputs: Settings_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving`)
};

/**
* | output |
* | --- |
* | "Saving" |
*
* @param {Settings_SavingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_saving = /** @type {((inputs?: Settings_SavingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_SavingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_saving(inputs)
	return zh_settings_saving(inputs)
});