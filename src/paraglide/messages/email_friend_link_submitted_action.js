/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Submitted_ActionInputs */

const zh_email_friend_link_submitted_action = /** @type {(inputs: Email_Friend_Link_Submitted_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前往审核`)
};

const en_email_friend_link_submitted_action = /** @type {(inputs: Email_Friend_Link_Submitted_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review Request`)
};

/**
* | output |
* | --- |
* | "Review Request" |
*
* @param {Email_Friend_Link_Submitted_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_action = /** @type {((inputs?: Email_Friend_Link_Submitted_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_action(inputs)
	return zh_email_friend_link_submitted_action(inputs)
});