/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Default_Site_Identity_DescInputs */

const zh_admin_overview_default_site_identity_desc = /** @type {(inputs: Admin_Overview_Default_Site_Identity_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`换成你自己的站点名称和作者`)
};

const en_admin_overview_default_site_identity_desc = /** @type {(inputs: Admin_Overview_Default_Site_Identity_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set your own site title and author`)
};

/**
* | output |
* | --- |
* | "Set your own site title and author" |
*
* @param {Admin_Overview_Default_Site_Identity_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_default_site_identity_desc = /** @type {((inputs?: Admin_Overview_Default_Site_Identity_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Default_Site_Identity_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_default_site_identity_desc(inputs)
	return zh_admin_overview_default_site_identity_desc(inputs)
});