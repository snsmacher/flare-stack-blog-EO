/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_TitleInputs */

const zh_admin_overview_title = /** @type {(inputs: Admin_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`概览`)
};

const en_admin_overview_title = /** @type {(inputs: Admin_Overview_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overview`)
};

/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Admin_Overview_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_title = /** @type {((inputs?: Admin_Overview_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_title(inputs)
	return zh_admin_overview_title(inputs)
});