/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Notify_Status_LoadingInputs */

const zh_profile_notify_status_loading = /** @type {(inputs: Profile_Notify_Status_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在获取通知状态，请稍候...`)
};

const en_profile_notify_status_loading = /** @type {(inputs: Profile_Notify_Status_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading notification status, please wait...`)
};

/**
* | output |
* | --- |
* | "Loading notification status, please wait..." |
*
* @param {Profile_Notify_Status_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_notify_status_loading = /** @type {((inputs?: Profile_Notify_Status_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Notify_Status_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_notify_status_loading(inputs)
	return zh_profile_notify_status_loading(inputs)
});