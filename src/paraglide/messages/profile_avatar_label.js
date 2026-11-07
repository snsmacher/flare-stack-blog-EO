/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Avatar_LabelInputs */

const zh_profile_avatar_label = /** @type {(inputs: Profile_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回首页`)
};

const en_profile_avatar_label = /** @type {(inputs: Profile_Avatar_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to Home`)
};

/**
* | output |
* | --- |
* | "Back to Home" |
*
* @param {Profile_Avatar_LabelInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const profile_avatar_label = /** @type {((inputs?: Profile_Avatar_LabelInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Avatar_LabelInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_profile_avatar_label(inputs)
	return zh_profile_avatar_label(inputs)
});