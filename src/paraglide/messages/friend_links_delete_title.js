/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Delete_TitleInputs */

const zh_friend_links_delete_title = /** @type {(inputs: Friend_Links_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除友链`)
};

const en_friend_links_delete_title = /** @type {(inputs: Friend_Links_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete friend link`)
};

/**
* | output |
* | --- |
* | "Delete friend link" |
*
* @param {Friend_Links_Delete_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_delete_title = /** @type {((inputs?: Friend_Links_Delete_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Delete_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_delete_title(inputs)
	return zh_friend_links_delete_title(inputs)
});