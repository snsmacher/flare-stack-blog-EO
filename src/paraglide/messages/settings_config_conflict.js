/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_ConflictInputs */

const zh_settings_config_conflict = /** @type {(inputs: Settings_Config_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此分区已被其他操作修改。你的输入仍保留，请放弃本分区修改并重新载入后再编辑。`)
};

const en_settings_config_conflict = /** @type {(inputs: Settings_Config_ConflictInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This section changed elsewhere. Your input is preserved. Discard this section’s draft and reload before editing again.`)
};

/**
* | output |
* | --- |
* | "This section changed elsewhere. Your input is preserved. Discard this section’s draft and reload before editing again." |
*
* @param {Settings_Config_ConflictInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_config_conflict = /** @type {((inputs?: Settings_Config_ConflictInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_ConflictInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_conflict(inputs)
	return zh_settings_config_conflict(inputs)
});