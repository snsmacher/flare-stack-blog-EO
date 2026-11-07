/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Muted_Users_Toast_ErrorInputs */

const zh_muted_users_toast_error = /** @type {(inputs: Muted_Users_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作失败，请重试`)
};

const en_muted_users_toast_error = /** @type {(inputs: Muted_Users_Toast_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Something went wrong. Try again.`)
};

/**
* | output |
* | --- |
* | "Something went wrong. Try again." |
*
* @param {Muted_Users_Toast_ErrorInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const muted_users_toast_error = /** @type {((inputs?: Muted_Users_Toast_ErrorInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Muted_Users_Toast_ErrorInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_muted_users_toast_error(inputs)
	return zh_muted_users_toast_error(inputs)
});