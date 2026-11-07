/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Friend_Link_Submitted_Site_NameInputs */

const zh_email_friend_link_submitted_site_name = /** @type {(inputs: Email_Friend_Link_Submitted_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点名称：`)
};

const en_email_friend_link_submitted_site_name = /** @type {(inputs: Email_Friend_Link_Submitted_Site_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site Name:`)
};

/**
* | output |
* | --- |
* | "Site Name:" |
*
* @param {Email_Friend_Link_Submitted_Site_NameInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_friend_link_submitted_site_name = /** @type {((inputs?: Email_Friend_Link_Submitted_Site_NameInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Friend_Link_Submitted_Site_NameInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_friend_link_submitted_site_name(inputs)
	return zh_email_friend_link_submitted_site_name(inputs)
});