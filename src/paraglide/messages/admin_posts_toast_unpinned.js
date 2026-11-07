/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_UnpinnedInputs */

const zh_admin_posts_toast_unpinned = /** @type {(inputs: Admin_Posts_Toast_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消置顶，首页已更新`)
};

const en_admin_posts_toast_unpinned = /** @type {(inputs: Admin_Posts_Toast_UnpinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpinned. The homepage is updated.`)
};

/**
* | output |
* | --- |
* | "Unpinned. The homepage is updated." |
*
* @param {Admin_Posts_Toast_UnpinnedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_unpinned = /** @type {((inputs?: Admin_Posts_Toast_UnpinnedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_UnpinnedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_unpinned(inputs)
	return zh_admin_posts_toast_unpinned(inputs)
});