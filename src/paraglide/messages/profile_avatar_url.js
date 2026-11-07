/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Avatar_UrlInputs */

const zh_profile_avatar_url = /** @type {(inputs: Profile_Avatar_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像链接`)
};

const en_profile_avatar_url = /** @type {(inputs: Profile_Avatar_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar URL`)
};

/**
* | output |
* | --- |
* | "Avatar URL" |
*
* @param {Profile_Avatar_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_avatar_url = /** @type {((inputs?: Profile_Avatar_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Avatar_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_avatar_url(inputs)
	return zh_profile_avatar_url(inputs)
});