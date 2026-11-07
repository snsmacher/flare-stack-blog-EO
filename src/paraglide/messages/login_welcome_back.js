/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Login_Welcome_BackInputs */

const zh_login_welcome_back = /** @type {(inputs: Login_Welcome_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用 GitHub 或邮箱验证码登录，首次登录会自动创建账号`)
};

const en_login_welcome_back = /** @type {(inputs: Login_Welcome_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sign in with GitHub or an emailed code. Your account is created the first time you sign in.`)
};

/**
* | output |
* | --- |
* | "Sign in with GitHub or an emailed code. Your account is created the first time you sign in." |
*
* @param {Login_Welcome_BackInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const login_welcome_back = /** @type {((inputs?: Login_Welcome_BackInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Login_Welcome_BackInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_login_welcome_back(inputs)
	return zh_login_welcome_back(inputs)
});