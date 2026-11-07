/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Github_ContinueInputs */

const zh_login_github_continue = /** @type {(inputs: Login_Github_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 GitHub 继续`)
};

const en_login_github_continue = /** @type {(inputs: Login_Github_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue with GitHub`)
};

/**
* | output |
* | --- |
* | "Continue with GitHub" |
*
* @param {Login_Github_ContinueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_github_continue = /** @type {((inputs?: Login_Github_ContinueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Github_ContinueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_github_continue(inputs)
	return zh_login_github_continue(inputs)
});