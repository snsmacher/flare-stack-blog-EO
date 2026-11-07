/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Add_Modal_SubmitInputs */

const zh_friend_links_add_modal_submit = /** @type {(inputs: Friend_Links_Add_Modal_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加`)
};

const en_friend_links_add_modal_submit = /** @type {(inputs: Friend_Links_Add_Modal_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add`)
};

/**
* | output |
* | --- |
* | "Add" |
*
* @param {Friend_Links_Add_Modal_SubmitInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_add_modal_submit = /** @type {((inputs?: Friend_Links_Add_Modal_SubmitInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Add_Modal_SubmitInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_add_modal_submit(inputs)
	return zh_friend_links_add_modal_submit(inputs)
});