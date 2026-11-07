/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Remove_HintInputs */

const zh_friend_links_remove_hint = /** @type {(inputs: Friend_Links_Remove_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前台将不再展示这条友链。`)
};

const en_friend_links_remove_hint = /** @type {(inputs: Friend_Links_Remove_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This friend link will leave the public page.`)
};

/**
* | output |
* | --- |
* | "This friend link will leave the public page." |
*
* @param {Friend_Links_Remove_HintInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_remove_hint = /** @type {((inputs?: Friend_Links_Remove_HintInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Remove_HintInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_remove_hint(inputs)
	return zh_friend_links_remove_hint(inputs)
});