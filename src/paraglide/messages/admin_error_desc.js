/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_DescInputs */

const zh_admin_error_desc = /** @type {(inputs: Admin_Error_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请稍后重试，或先返回后台概览。`)
};

const en_admin_error_desc = /** @type {(inputs: Admin_Error_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Please try again, or return to the admin overview.`)
};

/**
* | output |
* | --- |
* | "Please try again, or return to the admin overview." |
*
* @param {Admin_Error_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_error_desc = /** @type {((inputs?: Admin_Error_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_error_desc(inputs)
	return zh_admin_error_desc(inputs)
});