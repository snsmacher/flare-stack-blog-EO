/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Unpinned_DraftInputs */

const zh_admin_posts_toast_unpinned_draft = /** @type {(inputs: Admin_Posts_Toast_Unpinned_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消置顶`)
};

const en_admin_posts_toast_unpinned_draft = /** @type {(inputs: Admin_Posts_Toast_Unpinned_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpinned`)
};

/**
* | output |
* | --- |
* | "Unpinned" |
*
* @param {Admin_Posts_Toast_Unpinned_DraftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_unpinned_draft = /** @type {((inputs?: Admin_Posts_Toast_Unpinned_DraftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Unpinned_DraftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_unpinned_draft(inputs)
	return zh_admin_posts_toast_unpinned_draft(inputs)
});