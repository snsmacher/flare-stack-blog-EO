/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Validation_Name_MinInputs */

const zh_profile_validation_name_min = /** @type {(inputs: Profile_Validation_Name_MinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昵称至少需要 2 个字符`)
};

const en_profile_validation_name_min = /** @type {(inputs: Profile_Validation_Name_MinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nickname must be at least 2 characters`)
};

/**
* | output |
* | --- |
* | "Nickname must be at least 2 characters" |
*
* @param {Profile_Validation_Name_MinInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_validation_name_min = /** @type {((inputs?: Profile_Validation_Name_MinInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Validation_Name_MinInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_validation_name_min(inputs)
	return zh_profile_validation_name_min(inputs)
});