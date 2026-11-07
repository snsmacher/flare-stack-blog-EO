/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Example_Comment_PreviewInputs */

const zh_webhook_example_comment_preview = /** @type {(inputs: Webhook_Example_Comment_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是一条用于校验 Webhook 链路的测试评论。`)
};

const en_webhook_example_comment_preview = /** @type {(inputs: Webhook_Example_Comment_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a test comment used to verify the Webhook chain.`)
};

/**
* | output |
* | --- |
* | "This is a test comment used to verify the Webhook chain." |
*
* @param {Webhook_Example_Comment_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_example_comment_preview = /** @type {((inputs?: Webhook_Example_Comment_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Example_Comment_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_example_comment_preview(inputs)
	return zh_webhook_example_comment_preview(inputs)
});