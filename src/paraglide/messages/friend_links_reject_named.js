/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Friend_Links_Reject_NamedInputs */

const zh_friend_links_reject_named = /** @type {(inputs: Friend_Links_Reject_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`拒绝「${i?.name}」`)
};

const en_friend_links_reject_named = /** @type {(inputs: Friend_Links_Reject_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reject “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Reject “{name}”" |
*
* @param {Friend_Links_Reject_NamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_reject_named = /** @type {((inputs: Friend_Links_Reject_NamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Reject_NamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_reject_named(inputs)
	return zh_friend_links_reject_named(inputs)
});