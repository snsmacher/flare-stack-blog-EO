/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Status_DraftInputs */

const zh_admin_posts_status_draft = /** @type {(inputs: Admin_Posts_Status_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿`)
};

const en_admin_posts_status_draft = /** @type {(inputs: Admin_Posts_Status_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft`)
};

/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Admin_Posts_Status_DraftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_status_draft = /** @type {((inputs?: Admin_Posts_Status_DraftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Status_DraftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_status_draft(inputs)
	return zh_admin_posts_status_draft(inputs)
});