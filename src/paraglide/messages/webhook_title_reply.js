/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Title_ReplyInputs */

const zh_webhook_title_reply = /** @type {(inputs: Webhook_Title_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`博客通知 · 评论回复`)
};

const en_webhook_title_reply = /** @type {(inputs: Webhook_Title_ReplyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blog notification · Comment reply`)
};

/**
* | output |
* | --- |
* | "Blog notification · Comment reply" |
*
* @param {Webhook_Title_ReplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_title_reply = /** @type {((inputs?: Webhook_Title_ReplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Title_ReplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_title_reply(inputs)
	return zh_webhook_title_reply(inputs)
});