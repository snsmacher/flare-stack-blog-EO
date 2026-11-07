/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Admin_Overview_Update_AvailableInputs */

const zh_admin_overview_update_available = /** @type {(inputs: Admin_Overview_Update_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有新版本 ${i?.version}`)
};

const en_admin_overview_update_available = /** @type {(inputs: Admin_Overview_Update_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} is available`)
};

/**
* | output |
* | --- |
* | "Version {version} is available" |
*
* @param {Admin_Overview_Update_AvailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_update_available = /** @type {((inputs: Admin_Overview_Update_AvailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Update_AvailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_update_available(inputs)
	return zh_admin_overview_update_available(inputs)
});