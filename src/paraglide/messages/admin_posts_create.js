/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_CreateInputs */

const zh_admin_posts_create = /** @type {(inputs: Admin_Posts_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建文章`)
};

const en_admin_posts_create = /** @type {(inputs: Admin_Posts_CreateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Post`)
};

/**
* | output |
* | --- |
* | "New Post" |
*
* @param {Admin_Posts_CreateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_create = /** @type {((inputs?: Admin_Posts_CreateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_CreateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_create(inputs)
	return zh_admin_posts_create(inputs)
});