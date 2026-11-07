/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nav_NotifyInputs */

const zh_settings_nav_notify = /** @type {(inputs: Settings_Nav_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const en_settings_nav_notify = /** @type {(inputs: Settings_Nav_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifications`)
};

/**
* | output |
* | --- |
* | "Notifications" |
*
* @param {Settings_Nav_NotifyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const settings_nav_notify = /** @type {((inputs?: Settings_Nav_NotifyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nav_NotifyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_nav_notify(inputs)
	return zh_settings_nav_notify(inputs)
});