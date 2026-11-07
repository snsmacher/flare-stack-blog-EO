/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Filter_ChangedInputs */

const zh_admin_posts_filter_changed = /** @type {(inputs: Admin_Posts_Filter_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有新修改`)
};

const en_admin_posts_filter_changed = /** @type {(inputs: Admin_Posts_Filter_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpublished changes`)
};

/**
* | output |
* | --- |
* | "Unpublished changes" |
*
* @param {Admin_Posts_Filter_ChangedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_filter_changed = /** @type {((inputs?: Admin_Posts_Filter_ChangedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Filter_ChangedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_filter_changed(inputs)
	return zh_admin_posts_filter_changed(inputs)
});