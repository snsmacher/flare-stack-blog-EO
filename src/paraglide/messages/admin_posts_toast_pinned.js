/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_PinnedInputs */

const zh_admin_posts_toast_pinned = /** @type {(inputs: Admin_Posts_Toast_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已置顶，首页已更新`)
};

const en_admin_posts_toast_pinned = /** @type {(inputs: Admin_Posts_Toast_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned. The homepage is updated.`)
};

/**
* | output |
* | --- |
* | "Pinned. The homepage is updated." |
*
* @param {Admin_Posts_Toast_PinnedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_pinned = /** @type {((inputs?: Admin_Posts_Toast_PinnedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_PinnedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_pinned(inputs)
	return zh_admin_posts_toast_pinned(inputs)
});