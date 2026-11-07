/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_Disabled_FuwariInputs */

const zh_profile_notify_disabled_fuwari = /** @type {(inputs: Profile_Notify_Disabled_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未开启通知`)
};

const en_profile_notify_disabled_fuwari = /** @type {(inputs: Profile_Notify_Disabled_FuwariInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification Disabled`)
};

/**
* | output |
* | --- |
* | "Notification Disabled" |
*
* @param {Profile_Notify_Disabled_FuwariInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_disabled_fuwari = /** @type {((inputs?: Profile_Notify_Disabled_FuwariInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_Disabled_FuwariInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_disabled_fuwari(inputs)
	return zh_profile_notify_disabled_fuwari(inputs)
});