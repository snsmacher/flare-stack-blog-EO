/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_OptionalInputs */

const zh_friend_apply_optional = /** @type {(inputs: Friend_Apply_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选`)
};

const en_friend_apply_optional = /** @type {(inputs: Friend_Apply_OptionalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optional`)
};

/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Friend_Apply_OptionalInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_optional = /** @type {((inputs?: Friend_Apply_OptionalInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_OptionalInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_optional(inputs)
	return zh_friend_apply_optional(inputs)
});