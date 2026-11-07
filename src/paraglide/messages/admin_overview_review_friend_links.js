/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Review_Friend_LinksInputs */

const zh_admin_overview_review_friend_links = /** @type {(inputs: Admin_Overview_Review_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`去处理`)
};

const en_admin_overview_review_friend_links = /** @type {(inputs: Admin_Overview_Review_Friend_LinksInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review`)
};

/**
* | output |
* | --- |
* | "Review" |
*
* @param {Admin_Overview_Review_Friend_LinksInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_review_friend_links = /** @type {((inputs?: Admin_Overview_Review_Friend_LinksInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Review_Friend_LinksInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_review_friend_links(inputs)
	return zh_admin_overview_review_friend_links(inputs)
});