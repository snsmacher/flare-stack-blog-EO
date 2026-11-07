/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Admin_Root_TitleInputs */

const zh_email_comment_admin_root_title = /** @type {(inputs: Email_Comment_Admin_Root_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新评论提醒`)
};

const en_email_comment_admin_root_title = /** @type {(inputs: Email_Comment_Admin_Root_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New comment notification`)
};

/**
* | output |
* | --- |
* | "New comment notification" |
*
* @param {Email_Comment_Admin_Root_TitleInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_admin_root_title = /** @type {((inputs?: Email_Comment_Admin_Root_TitleInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Admin_Root_TitleInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_admin_root_title(inputs)
	return zh_email_comment_admin_root_title(inputs)
});