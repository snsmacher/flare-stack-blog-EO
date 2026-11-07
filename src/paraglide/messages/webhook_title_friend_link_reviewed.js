/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Title_Friend_Link_ReviewedInputs */

const zh_webhook_title_friend_link_reviewed = /** @type {(inputs: Webhook_Title_Friend_Link_ReviewedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客通知 · 友链审核`)
};

const en_webhook_title_friend_link_reviewed = /** @type {(inputs: Webhook_Title_Friend_Link_ReviewedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog notification · Friend link review`)
};

/**
* | output |
* | --- |
* | "Blog notification · Friend link review" |
*
* @param {Webhook_Title_Friend_Link_ReviewedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_title_friend_link_reviewed = /** @type {((inputs?: Webhook_Title_Friend_Link_ReviewedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Title_Friend_Link_ReviewedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_title_friend_link_reviewed(inputs)
	return zh_webhook_title_friend_link_reviewed(inputs)
});