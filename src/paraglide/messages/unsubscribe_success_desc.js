/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Success_DescInputs */

const zh_unsubscribe_success_desc = /** @type {(inputs: Unsubscribe_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已成功退订此类通知邮件。如有需要，你可以随时在个人中心重新开启订阅。`)
};

const en_unsubscribe_success_desc = /** @type {(inputs: Unsubscribe_Success_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have successfully unsubscribed from this type of notification email. You can manage your preferences in your profile at any time.`)
};

/**
* | output |
* | --- |
* | "You have successfully unsubscribed from this type of notification email. You can manage your preferences in your profile at any time." |
*
* @param {Unsubscribe_Success_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_success_desc = /** @type {((inputs?: Unsubscribe_Success_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Success_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_success_desc(inputs)
	return zh_unsubscribe_success_desc(inputs)
});