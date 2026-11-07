/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_Status_FailedInputs */

const zh_profile_notify_status_failed = /** @type {(inputs: Profile_Notify_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`获取通知设置失败，请稍后重试`)
};

const en_profile_notify_status_failed = /** @type {(inputs: Profile_Notify_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to load notification settings, please try again`)
};

/**
* | output |
* | --- |
* | "Failed to load notification settings, please try again" |
*
* @param {Profile_Notify_Status_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_status_failed = /** @type {((inputs?: Profile_Notify_Status_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_Status_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_status_failed(inputs)
	return zh_profile_notify_status_failed(inputs)
});