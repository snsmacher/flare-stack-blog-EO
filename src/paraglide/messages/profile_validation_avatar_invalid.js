/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Validation_Avatar_InvalidInputs */

const zh_profile_validation_avatar_invalid = /** @type {(inputs: Profile_Validation_Avatar_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入有效的图片链接`)
};

const en_profile_validation_avatar_invalid = /** @type {(inputs: Profile_Validation_Avatar_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please enter a valid image URL`)
};

/**
* | output |
* | --- |
* | "Please enter a valid image URL" |
*
* @param {Profile_Validation_Avatar_InvalidInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_validation_avatar_invalid = /** @type {((inputs?: Profile_Validation_Avatar_InvalidInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Validation_Avatar_InvalidInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_validation_avatar_invalid(inputs)
	return zh_profile_validation_avatar_invalid(inputs)
});