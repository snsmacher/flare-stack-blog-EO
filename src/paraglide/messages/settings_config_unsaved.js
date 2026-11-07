/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_UnsavedInputs */

const zh_settings_config_unsaved = /** @type {(inputs: Settings_Config_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本分区有未保存的修改`)
};

const en_settings_config_unsaved = /** @type {(inputs: Settings_Config_UnsavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This section has unsaved changes`)
};

/**
* | output |
* | --- |
* | "This section has unsaved changes" |
*
* @param {Settings_Config_UnsavedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_unsaved = /** @type {((inputs?: Settings_Config_UnsavedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_UnsavedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_unsaved(inputs)
	return zh_settings_config_unsaved(inputs)
});