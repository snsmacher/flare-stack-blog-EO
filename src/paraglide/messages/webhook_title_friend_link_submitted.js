/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Title_Friend_Link_SubmittedInputs */

const zh_webhook_title_friend_link_submitted = /** @type {(inputs: Webhook_Title_Friend_Link_SubmittedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客通知 · 友链申请`)
};

const en_webhook_title_friend_link_submitted = /** @type {(inputs: Webhook_Title_Friend_Link_SubmittedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog notification · Friend link request`)
};

/**
* | output |
* | --- |
* | "Blog notification · Friend link request" |
*
* @param {Webhook_Title_Friend_Link_SubmittedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_title_friend_link_submitted = /** @type {((inputs?: Webhook_Title_Friend_Link_SubmittedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Title_Friend_Link_SubmittedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_title_friend_link_submitted(inputs)
	return zh_webhook_title_friend_link_submitted(inputs)
});