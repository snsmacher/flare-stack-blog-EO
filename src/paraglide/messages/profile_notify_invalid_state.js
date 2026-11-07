/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_Invalid_StateInputs */

const zh_profile_notify_invalid_state = /** @type {(inputs: Profile_Notify_Invalid_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知状态异常，请刷新页面后重试`)
};

const en_profile_notify_invalid_state = /** @type {(inputs: Profile_Notify_Invalid_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification status is invalid, please refresh and try again`)
};

/**
* | output |
* | --- |
* | "Notification status is invalid, please refresh and try again" |
*
* @param {Profile_Notify_Invalid_StateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_invalid_state = /** @type {((inputs?: Profile_Notify_Invalid_StateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_Invalid_StateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_invalid_state(inputs)
	return zh_profile_notify_invalid_state(inputs)
});