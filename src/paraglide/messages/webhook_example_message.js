/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Example_MessageInputs */

const zh_webhook_example_message = /** @type {(inputs: Webhook_Example_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试用户在《欢迎使用通知系统》下发表了评论：这是一条示例评论。`)
};

const en_webhook_example_message = /** @type {(inputs: Webhook_Example_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test User posted a comment on "Welcome to the Notification System": This is an example comment.`)
};

/**
* | output |
* | --- |
* | "Test User posted a comment on \"Welcome to the Notification System\": This is an example comment." |
*
* @param {Webhook_Example_MessageInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_example_message = /** @type {((inputs?: Webhook_Example_MessageInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Example_MessageInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_example_message(inputs)
	return zh_webhook_example_message(inputs)
});