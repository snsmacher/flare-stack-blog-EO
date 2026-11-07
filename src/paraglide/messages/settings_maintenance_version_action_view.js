/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Maintenance_Version_Action_ViewInputs */

const zh_settings_maintenance_version_action_view = /** @type {(inputs: Settings_Maintenance_Version_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看`)
};

const en_settings_maintenance_version_action_view = /** @type {(inputs: Settings_Maintenance_Version_Action_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Settings_Maintenance_Version_Action_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_maintenance_version_action_view = /** @type {((inputs?: Settings_Maintenance_Version_Action_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Maintenance_Version_Action_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_maintenance_version_action_view(inputs)
	return zh_settings_maintenance_version_action_view(inputs)
});