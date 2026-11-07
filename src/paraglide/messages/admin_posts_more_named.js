/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Admin_Posts_More_NamedInputs */

const zh_admin_posts_more_named = /** @type {(inputs: Admin_Posts_More_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更多操作：${i?.title}`)
};

const en_admin_posts_more_named = /** @type {(inputs: Admin_Posts_More_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More actions for ${i?.title}`)
};

/**
* | output |
* | --- |
* | "More actions for {title}" |
*
* @param {Admin_Posts_More_NamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_more_named = /** @type {((inputs: Admin_Posts_More_NamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_More_NamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_more_named(inputs)
	return zh_admin_posts_more_named(inputs)
});