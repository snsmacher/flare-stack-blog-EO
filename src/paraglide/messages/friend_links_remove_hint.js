/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Remove_HintInputs */

const zh_friend_links_remove_hint = /** @type {(inputs: Friend_Links_Remove_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前台将不再展示这条友链，记录保留在「已拒绝」，可随时重新通过，申请人会收到通知。如需清除记录，请使用「删除」。`)
};

const en_friend_links_remove_hint = /** @type {(inputs: Friend_Links_Remove_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This friend link will leave the public page. The record stays under Rejected and can be approved again, and the applicant is notified. To erase the record, use Delete.`)
};

/**
* | output |
* | --- |
* | "This friend link will leave the public page. The record stays under Rejected and can be approved again, and the applicant is notified. To erase the record, u..." |
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