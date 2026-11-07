/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Popularity_FailedInputs */

const zh_admin_overview_popularity_failed = /** @type {(inputs: Admin_Overview_Popularity_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热度同步失败`)
};

const en_admin_overview_popularity_failed = /** @type {(inputs: Admin_Overview_Popularity_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popularity sync failed`)
};

/**
* | output |
* | --- |
* | "Popularity sync failed" |
*
* @param {Admin_Overview_Popularity_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_popularity_failed = /** @type {((inputs?: Admin_Overview_Popularity_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Popularity_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_popularity_failed(inputs)
	return zh_admin_overview_popularity_failed(inputs)
});