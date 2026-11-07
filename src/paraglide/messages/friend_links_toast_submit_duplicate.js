/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Submit_DuplicateInputs */

const zh_friend_links_toast_submit_duplicate = /** @type {(inputs: Friend_Links_Toast_Submit_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`该站点地址已提交过申请，请勿重复提交`)
};

const en_friend_links_toast_submit_duplicate = /** @type {(inputs: Friend_Links_Toast_Submit_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This site URL has already been submitted. Please do not submit again.`)
};

/**
* | output |
* | --- |
* | "This site URL has already been submitted. Please do not submit again." |
*
* @param {Friend_Links_Toast_Submit_DuplicateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_submit_duplicate = /** @type {((inputs?: Friend_Links_Toast_Submit_DuplicateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Submit_DuplicateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_submit_duplicate(inputs)
	return zh_friend_links_toast_submit_duplicate(inputs)
});