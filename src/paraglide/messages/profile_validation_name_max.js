/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Validation_Name_MaxInputs */

const zh_profile_validation_name_max = /** @type {(inputs: Profile_Validation_Name_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昵称不能超过 20 个字符`)
};

const en_profile_validation_name_max = /** @type {(inputs: Profile_Validation_Name_MaxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nickname must be at most 20 characters`)
};

/**
* | output |
* | --- |
* | "Nickname must be at most 20 characters" |
*
* @param {Profile_Validation_Name_MaxInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_validation_name_max = /** @type {((inputs?: Profile_Validation_Name_MaxInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Validation_Name_MaxInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_validation_name_max(inputs)
	return zh_profile_validation_name_max(inputs)
});