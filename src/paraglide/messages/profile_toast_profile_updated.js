/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Toast_Profile_UpdatedInputs */

const zh_profile_toast_profile_updated = /** @type {(inputs: Profile_Toast_Profile_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料已更新`)
};

const en_profile_toast_profile_updated = /** @type {(inputs: Profile_Toast_Profile_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile updated`)
};

/**
* | output |
* | --- |
* | "Profile updated" |
*
* @param {Profile_Toast_Profile_UpdatedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_toast_profile_updated = /** @type {((inputs?: Profile_Toast_Profile_UpdatedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Toast_Profile_UpdatedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_toast_profile_updated(inputs)
	return zh_profile_toast_profile_updated(inputs)
});