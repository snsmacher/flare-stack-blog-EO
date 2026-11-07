/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Toast_Update_FailedInputs */

const zh_profile_toast_update_failed = /** @type {(inputs: Profile_Toast_Update_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料更新失败`)
};

const en_profile_toast_update_failed = /** @type {(inputs: Profile_Toast_Update_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update profile`)
};

/**
* | output |
* | --- |
* | "Failed to update profile" |
*
* @param {Profile_Toast_Update_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_toast_update_failed = /** @type {((inputs?: Profile_Toast_Update_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Toast_Update_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_toast_update_failed(inputs)
	return zh_profile_toast_update_failed(inputs)
});