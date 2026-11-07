/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Example_Post_TitleInputs */

const zh_webhook_example_post_title = /** @type {(inputs: Webhook_Example_Post_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`欢迎使用通知系统`)
};

const en_webhook_example_post_title = /** @type {(inputs: Webhook_Example_Post_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Welcome to the Notification System`)
};

/**
* | output |
* | --- |
* | "Welcome to the Notification System" |
*
* @param {Webhook_Example_Post_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_example_post_title = /** @type {((inputs?: Webhook_Example_Post_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Example_Post_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_example_post_title(inputs)
	return zh_webhook_example_post_title(inputs)
});