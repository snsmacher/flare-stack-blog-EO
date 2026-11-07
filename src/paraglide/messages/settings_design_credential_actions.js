/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Design_Credential_ActionsInputs */

const zh_settings_design_credential_actions = /** @type {(inputs: Settings_Design_Credential_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`凭据操作`)
};

const en_settings_design_credential_actions = /** @type {(inputs: Settings_Design_Credential_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Credential actions`)
};

/**
* | output |
* | --- |
* | "Credential actions" |
*
* @param {Settings_Design_Credential_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_design_credential_actions = /** @type {((inputs?: Settings_Design_Credential_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Design_Credential_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_design_credential_actions(inputs)
	return zh_settings_design_credential_actions(inputs)
});