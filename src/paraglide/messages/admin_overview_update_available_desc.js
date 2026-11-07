/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ current: NonNullable<unknown> }} Admin_Overview_Update_Available_DescInputs */

const zh_admin_overview_update_available_desc = /** @type {(inputs: Admin_Overview_Update_Available_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`当前是 v${i?.current}，看看更新了什么`)
};

const en_admin_overview_update_available_desc = /** @type {(inputs: Admin_Overview_Update_Available_DescInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`You're on v${i?.current}. See what's new`)
};

/**
* | output |
* | --- |
* | "You're on v{current}. See what's new" |
*
* @param {Admin_Overview_Update_Available_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_update_available_desc = /** @type {((inputs: Admin_Overview_Update_Available_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Update_Available_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_update_available_desc(inputs)
	return zh_admin_overview_update_available_desc(inputs)
});