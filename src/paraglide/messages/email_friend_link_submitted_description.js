/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Submitted_DescriptionInputs */

const zh_email_friend_link_submitted_description = /** @type {(inputs: Email_Friend_Link_Submitted_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简介：`)
};

const en_email_friend_link_submitted_description = /** @type {(inputs: Email_Friend_Link_Submitted_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description:`)
};

/**
* | output |
* | --- |
* | "Description:" |
*
* @param {Email_Friend_Link_Submitted_DescriptionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_description = /** @type {((inputs?: Email_Friend_Link_Submitted_DescriptionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_DescriptionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_description(inputs)
	return zh_email_friend_link_submitted_description(inputs)
});