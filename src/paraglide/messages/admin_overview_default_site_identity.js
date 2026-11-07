/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Default_Site_IdentityInputs */

const zh_admin_overview_default_site_identity = /** @type {(inputs: Admin_Overview_Default_Site_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点还是默认信息`)
};

const en_admin_overview_default_site_identity = /** @type {(inputs: Admin_Overview_Default_Site_IdentityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site still uses the default name`)
};

/**
* | output |
* | --- |
* | "Site still uses the default name" |
*
* @param {Admin_Overview_Default_Site_IdentityInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_default_site_identity = /** @type {((inputs?: Admin_Overview_Default_Site_IdentityInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Default_Site_IdentityInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_default_site_identity(inputs)
	return zh_admin_overview_default_site_identity(inputs)
});