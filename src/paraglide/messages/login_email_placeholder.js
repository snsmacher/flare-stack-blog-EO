/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Email_PlaceholderInputs */

const zh_login_email_placeholder = /** @type {(inputs: Login_Email_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`example@mail.com`)
};

const en_login_email_placeholder = /** @type {(inputs: Login_Email_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`example@mail.com`)
};

/**
* | output |
* | --- |
* | "example@mail.com" |
*
* @param {Login_Email_PlaceholderInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_email_placeholder = /** @type {((inputs?: Login_Email_PlaceholderInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Email_PlaceholderInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_email_placeholder(inputs)
	return zh_login_email_placeholder(inputs)
});