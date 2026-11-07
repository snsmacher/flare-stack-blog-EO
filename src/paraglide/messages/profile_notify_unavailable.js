/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_UnavailableInputs */

const zh_profile_notify_unavailable = /** @type {(inputs: Profile_Notify_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本站暂未开启邮件通知服务`)
};

const en_profile_notify_unavailable = /** @type {(inputs: Profile_Notify_UnavailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Email notifications are not enabled on this site`)
};

/**
* | output |
* | --- |
* | "Email notifications are not enabled on this site" |
*
* @param {Profile_Notify_UnavailableInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_unavailable = /** @type {((inputs?: Profile_Notify_UnavailableInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_UnavailableInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_unavailable(inputs)
	return zh_profile_notify_unavailable(inputs)
});