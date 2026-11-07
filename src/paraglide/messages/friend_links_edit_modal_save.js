/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Edit_Modal_SaveInputs */

const zh_friend_links_edit_modal_save = /** @type {(inputs: Friend_Links_Edit_Modal_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const en_friend_links_edit_modal_save = /** @type {(inputs: Friend_Links_Edit_Modal_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Friend_Links_Edit_Modal_SaveInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_edit_modal_save = /** @type {((inputs?: Friend_Links_Edit_Modal_SaveInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Edit_Modal_SaveInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_edit_modal_save(inputs)
	return zh_friend_links_edit_modal_save(inputs)
});