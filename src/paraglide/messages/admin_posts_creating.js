/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_CreatingInputs */

const zh_admin_posts_creating = /** @type {(inputs: Admin_Posts_CreatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建中...`)
};

const en_admin_posts_creating = /** @type {(inputs: Admin_Posts_CreatingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creating...`)
};

/**
* | output |
* | --- |
* | "Creating..." |
*
* @param {Admin_Posts_CreatingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_creating = /** @type {((inputs?: Admin_Posts_CreatingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_CreatingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_creating(inputs)
	return zh_admin_posts_creating(inputs)
});