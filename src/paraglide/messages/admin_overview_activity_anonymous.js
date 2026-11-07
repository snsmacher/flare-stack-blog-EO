/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Activity_AnonymousInputs */

const zh_admin_overview_activity_anonymous = /** @type {(inputs: Admin_Overview_Activity_AnonymousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`匿名用户`)
};

const en_admin_overview_activity_anonymous = /** @type {(inputs: Admin_Overview_Activity_AnonymousInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anonymous`)
};

/**
* | output |
* | --- |
* | "Anonymous" |
*
* @param {Admin_Overview_Activity_AnonymousInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_activity_anonymous = /** @type {((inputs?: Admin_Overview_Activity_AnonymousInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Activity_AnonymousInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_activity_anonymous(inputs)
	return zh_admin_overview_activity_anonymous(inputs)
});