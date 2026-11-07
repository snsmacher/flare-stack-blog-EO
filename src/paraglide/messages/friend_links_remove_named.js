/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Friend_Links_Remove_NamedInputs */

const zh_friend_links_remove_named = /** @type {(inputs: Friend_Links_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移出「${i?.name}」`)
};

const en_friend_links_remove_named = /** @type {(inputs: Friend_Links_Remove_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove “${i?.name}”`)
};

/**
* | output |
* | --- |
* | "Remove “{name}”" |
*
* @param {Friend_Links_Remove_NamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_remove_named = /** @type {((inputs: Friend_Links_Remove_NamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Remove_NamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_remove_named(inputs)
	return zh_friend_links_remove_named(inputs)
});