/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Invalid_DescInputs */

const zh_unsubscribe_invalid_desc = /** @type {(inputs: Unsubscribe_Invalid_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订链接不完整或已失效。请点击邮件底部的完整链接，或在个人中心管理你的通知订阅。`)
};

const en_unsubscribe_invalid_desc = /** @type {(inputs: Unsubscribe_Invalid_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The unsubscribe link is incomplete or has expired. Please use the link at the bottom of the email, or manage your notification preferences in your profile.`)
};

/**
* | output |
* | --- |
* | "The unsubscribe link is incomplete or has expired. Please use the link at the bottom of the email, or manage your notification preferences in your profile." |
*
* @param {Unsubscribe_Invalid_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_invalid_desc = /** @type {((inputs?: Unsubscribe_Invalid_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Invalid_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_invalid_desc(inputs)
	return zh_unsubscribe_invalid_desc(inputs)
});