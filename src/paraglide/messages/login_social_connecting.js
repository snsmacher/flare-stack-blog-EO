/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Social_ConnectingInputs */

const zh_login_social_connecting = /** @type {(inputs: Login_Social_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在连接...`)
};

const en_login_social_connecting = /** @type {(inputs: Login_Social_ConnectingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connecting...`)
};

/**
* | output |
* | --- |
* | "Connecting..." |
*
* @param {Login_Social_ConnectingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_social_connecting = /** @type {((inputs?: Login_Social_ConnectingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Social_ConnectingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_social_connecting(inputs)
	return zh_login_social_connecting(inputs)
});