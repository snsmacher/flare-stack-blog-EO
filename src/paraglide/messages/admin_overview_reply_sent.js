/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Reply_SentInputs */

const zh_admin_overview_reply_sent = /** @type {(inputs: Admin_Overview_Reply_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复已发送`)
};

const en_admin_overview_reply_sent = /** @type {(inputs: Admin_Overview_Reply_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply sent`)
};

/**
* | output |
* | --- |
* | "Reply sent" |
*
* @param {Admin_Overview_Reply_SentInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_reply_sent = /** @type {((inputs?: Admin_Overview_Reply_SentInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Reply_SentInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_reply_sent(inputs)
	return zh_admin_overview_reply_sent(inputs)
});