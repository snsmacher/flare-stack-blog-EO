/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Result_TitleInputs */

const zh_email_friend_link_result_title = /** @type {(inputs: Email_Friend_Link_Result_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友链审核结果`)
};

const en_email_friend_link_result_title = /** @type {(inputs: Email_Friend_Link_Result_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Friend link review result`)
};

/**
* | output |
* | --- |
* | "Friend link review result" |
*
* @param {Email_Friend_Link_Result_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_result_title = /** @type {((inputs?: Email_Friend_Link_Result_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Result_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_result_title(inputs)
	return zh_email_friend_link_result_title(inputs)
});