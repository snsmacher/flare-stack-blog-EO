/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Add_Modal_TitleInputs */

const zh_friend_links_add_modal_title = /** @type {(inputs: Friend_Links_Add_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加友链`)
};

const en_friend_links_add_modal_title = /** @type {(inputs: Friend_Links_Add_Modal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Link`)
};

/**
* | output |
* | --- |
* | "Add Link" |
*
* @param {Friend_Links_Add_Modal_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_add_modal_title = /** @type {((inputs?: Friend_Links_Add_Modal_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Add_Modal_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_add_modal_title(inputs)
	return zh_friend_links_add_modal_title(inputs)
});