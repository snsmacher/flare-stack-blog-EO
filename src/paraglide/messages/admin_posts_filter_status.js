/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_StatusInputs */

const zh_admin_posts_filter_status = /** @type {(inputs: Admin_Posts_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const en_admin_posts_filter_status = /** @type {(inputs: Admin_Posts_Filter_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Posts_Filter_StatusInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_status = /** @type {((inputs?: Admin_Posts_Filter_StatusInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_StatusInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_status(inputs)
	return zh_admin_posts_filter_status(inputs)
});