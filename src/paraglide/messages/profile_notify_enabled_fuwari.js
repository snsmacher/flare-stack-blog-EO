/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_Enabled_FuwariInputs */

const zh_profile_notify_enabled_fuwari = /** @type {(inputs: Profile_Notify_Enabled_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已开启通知`)
};

const en_profile_notify_enabled_fuwari = /** @type {(inputs: Profile_Notify_Enabled_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification Enabled`)
};

/**
* | output |
* | --- |
* | "Notification Enabled" |
*
* @param {Profile_Notify_Enabled_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_enabled_fuwari = /** @type {((inputs?: Profile_Notify_Enabled_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_Enabled_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_enabled_fuwari(inputs)
	return zh_profile_notify_enabled_fuwari(inputs)
});