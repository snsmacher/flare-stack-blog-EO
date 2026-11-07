/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Links_Toast_Submit_Success_DescInputs */

const zh_friend_links_toast_submit_success_desc = /** @type {(inputs: Friend_Links_Toast_Submit_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核结果将通过邮箱通知你，请耐心等待。`)
};

const en_friend_links_toast_submit_success_desc = /** @type {(inputs: Friend_Links_Toast_Submit_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We will notify you by email once your application has been reviewed.`)
};

/**
* | output |
* | --- |
* | "We will notify you by email once your application has been reviewed." |
*
* @param {Friend_Links_Toast_Submit_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_links_toast_submit_success_desc = /** @type {((inputs?: Friend_Links_Toast_Submit_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Links_Toast_Submit_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_links_toast_submit_success_desc(inputs)
	return zh_friend_links_toast_submit_success_desc(inputs)
});