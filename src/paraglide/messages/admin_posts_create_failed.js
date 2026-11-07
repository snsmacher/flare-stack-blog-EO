/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Create_FailedInputs */

const zh_admin_posts_create_failed = /** @type {(inputs: Admin_Posts_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建文章失败，请重试。`)
};

const en_admin_posts_create_failed = /** @type {(inputs: Admin_Posts_Create_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not create the post. Try again.`)
};

/**
* | output |
* | --- |
* | "Could not create the post. Try again." |
*
* @param {Admin_Posts_Create_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_create_failed = /** @type {((inputs?: Admin_Posts_Create_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Create_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_create_failed(inputs)
	return zh_admin_posts_create_failed(inputs)
});