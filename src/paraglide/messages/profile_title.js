/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_TitleInputs */

const zh_profile_title = /** @type {(inputs: Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`个人资料`)
};

const en_profile_title = /** @type {(inputs: Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profile`)
};

/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Profile_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_title = /** @type {((inputs?: Profile_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_title(inputs)
	return zh_profile_title(inputs)
});