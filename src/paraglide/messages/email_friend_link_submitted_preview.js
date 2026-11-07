/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ submitterName: NonNullable<unknown>, siteName: NonNullable<unknown> }} Email_Friend_Link_Submitted_PreviewInputs */

const zh_email_friend_link_submitted_preview = /** @type {(inputs: Email_Friend_Link_Submitted_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} 提交了友链申请：${i?.siteName}`)
};

const en_email_friend_link_submitted_preview = /** @type {(inputs: Email_Friend_Link_Submitted_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.submitterName} submitted a friend link request: ${i?.siteName}`)
};

/**
* | output |
* | --- |
* | "{submitterName} submitted a friend link request: {siteName}" |
*
* @param {Email_Friend_Link_Submitted_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_preview = /** @type {((inputs: Email_Friend_Link_Submitted_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_preview(inputs)
	return zh_email_friend_link_submitted_preview(inputs)
});