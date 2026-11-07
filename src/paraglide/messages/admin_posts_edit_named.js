/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Admin_Posts_Edit_NamedInputs */

const zh_admin_posts_edit_named = /** @type {(inputs: Admin_Posts_Edit_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑「${i?.title}」`)
};

const en_admin_posts_edit_named = /** @type {(inputs: Admin_Posts_Edit_NamedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit ${i?.title}`)
};

/**
* | output |
* | --- |
* | "Edit {title}" |
*
* @param {Admin_Posts_Edit_NamedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_edit_named = /** @type {((inputs: Admin_Posts_Edit_NamedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Edit_NamedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_edit_named(inputs)
	return zh_admin_posts_edit_named(inputs)
});