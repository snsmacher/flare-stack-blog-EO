/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Pinned_DraftInputs */

const zh_admin_posts_toast_pinned_draft = /** @type {(inputs: Admin_Posts_Toast_Pinned_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已置顶，文章发布后将显示在首页`)
};

const en_admin_posts_toast_pinned_draft = /** @type {(inputs: Admin_Posts_Toast_Pinned_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned. It shows on the homepage once published.`)
};

/**
* | output |
* | --- |
* | "Pinned. It shows on the homepage once published." |
*
* @param {Admin_Posts_Toast_Pinned_DraftInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_pinned_draft = /** @type {((inputs?: Admin_Posts_Toast_Pinned_DraftInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Pinned_DraftInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_pinned_draft(inputs)
	return zh_admin_posts_toast_pinned_draft(inputs)
});