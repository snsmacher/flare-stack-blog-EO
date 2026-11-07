/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Submitted_TitleInputs */

const zh_email_friend_link_submitted_title = /** @type {(inputs: Email_Friend_Link_Submitted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新友链申请`)
};

const en_email_friend_link_submitted_title = /** @type {(inputs: Email_Friend_Link_Submitted_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New friend link request`)
};

/**
* | output |
* | --- |
* | "New friend link request" |
*
* @param {Email_Friend_Link_Submitted_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_title = /** @type {((inputs?: Email_Friend_Link_Submitted_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_title(inputs)
	return zh_email_friend_link_submitted_title(inputs)
});