/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Submitted_Site_UrlInputs */

const zh_email_friend_link_submitted_site_url = /** @type {(inputs: Email_Friend_Link_Submitted_Site_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点地址：`)
};

const en_email_friend_link_submitted_site_url = /** @type {(inputs: Email_Friend_Link_Submitted_Site_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site URL:`)
};

/**
* | output |
* | --- |
* | "Site URL:" |
*
* @param {Email_Friend_Link_Submitted_Site_UrlInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_site_url = /** @type {((inputs?: Email_Friend_Link_Submitted_Site_UrlInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_Site_UrlInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_site_url(inputs)
	return zh_email_friend_link_submitted_site_url(inputs)
});