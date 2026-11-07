/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Popularity_ExpiredInputs */

const zh_admin_overview_popularity_expired = /** @type {(inputs: Admin_Overview_Popularity_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热度数据已过期`)
};

const en_admin_overview_popularity_expired = /** @type {(inputs: Admin_Overview_Popularity_ExpiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularity data expired`)
};

/**
* | output |
* | --- |
* | "Popularity data expired" |
*
* @param {Admin_Overview_Popularity_ExpiredInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_popularity_expired = /** @type {((inputs?: Admin_Overview_Popularity_ExpiredInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Popularity_ExpiredInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_popularity_expired(inputs)
	return zh_admin_overview_popularity_expired(inputs)
});