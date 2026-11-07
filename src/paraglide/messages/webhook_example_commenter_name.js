/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Webhook_Example_Commenter_NameInputs */

const zh_webhook_example_commenter_name = /** @type {(inputs: Webhook_Example_Commenter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`测试用户`)
};

const en_webhook_example_commenter_name = /** @type {(inputs: Webhook_Example_Commenter_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Test User`)
};

/**
* | output |
* | --- |
* | "Test User" |
*
* @param {Webhook_Example_Commenter_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const webhook_example_commenter_name = /** @type {((inputs?: Webhook_Example_Commenter_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Webhook_Example_Commenter_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_webhook_example_commenter_name(inputs)
	return zh_webhook_example_commenter_name(inputs)
});