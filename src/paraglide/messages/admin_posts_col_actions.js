/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Col_ActionsInputs */

const zh_admin_posts_col_actions = /** @type {(inputs: Admin_Posts_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作`)
};

const en_admin_posts_col_actions = /** @type {(inputs: Admin_Posts_Col_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actions`)
};

/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Posts_Col_ActionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_col_actions = /** @type {((inputs?: Admin_Posts_Col_ActionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Col_ActionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_col_actions(inputs)
	return zh_admin_posts_col_actions(inputs)
});