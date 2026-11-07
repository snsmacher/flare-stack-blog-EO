/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_ReviseInputs */

const zh_friend_apply_revise = /** @type {(inputs: Friend_Apply_ReviseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改申请`)
};

const en_friend_apply_revise = /** @type {(inputs: Friend_Apply_ReviseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revise application`)
};

/**
* | output |
* | --- |
* | "Revise application" |
*
* @param {Friend_Apply_ReviseInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_revise = /** @type {((inputs?: Friend_Apply_ReviseInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_ReviseInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_revise(inputs)
	return zh_friend_apply_revise(inputs)
});