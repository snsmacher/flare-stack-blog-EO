/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_NameInputs */

const zh_profile_name = /** @type {(inputs: Profile_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`昵称`)
};

const en_profile_name = /** @type {(inputs: Profile_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nickname`)
};

/**
* | output |
* | --- |
* | "Nickname" |
*
* @param {Profile_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_name = /** @type {((inputs?: Profile_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_name(inputs)
	return zh_profile_name(inputs)
});