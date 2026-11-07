/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ submitterName: NonNullable<unknown> }} Email_Friend_Link_Submitted_IntroInputs */

const zh_email_friend_link_submitted_intro = /** @type {(inputs: Email_Friend_Link_Submitted_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} 提交了友链申请：`)
};

const en_email_friend_link_submitted_intro = /** @type {(inputs: Email_Friend_Link_Submitted_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} submitted a friend link request:`)
};

/**
* | output |
* | --- |
* | "{submitterName} submitted a friend link request:" |
*
* @param {Email_Friend_Link_Submitted_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_intro = /** @type {((inputs: Email_Friend_Link_Submitted_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_intro(inputs)
	return zh_email_friend_link_submitted_intro(inputs)
});