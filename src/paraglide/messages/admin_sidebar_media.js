/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Sidebar_MediaInputs */

const zh_admin_sidebar_media = /** @type {(inputs: Admin_Sidebar_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`媒体库`)
};

const en_admin_sidebar_media = /** @type {(inputs: Admin_Sidebar_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Media`)
};

/**
* | output |
* | --- |
* | "Media" |
*
* @param {Admin_Sidebar_MediaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_sidebar_media = /** @type {((inputs?: Admin_Sidebar_MediaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Sidebar_MediaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_sidebar_media(inputs)
	return zh_admin_sidebar_media(inputs)
});