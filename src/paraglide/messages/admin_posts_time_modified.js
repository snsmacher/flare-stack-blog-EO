/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Time_ModifiedInputs */

const zh_admin_posts_time_modified = /** @type {(inputs: Admin_Posts_Time_ModifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改`)
};

const en_admin_posts_time_modified = /** @type {(inputs: Admin_Posts_Time_ModifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modified`)
};

/**
* | output |
* | --- |
* | "Modified" |
*
* @param {Admin_Posts_Time_ModifiedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_time_modified = /** @type {((inputs?: Admin_Posts_Time_ModifiedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Time_ModifiedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_time_modified(inputs)
	return zh_admin_posts_time_modified(inputs)
});