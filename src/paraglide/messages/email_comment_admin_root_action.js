/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Email_Comment_Admin_Root_ActionInputs */

const zh_email_comment_admin_root_action = /** @type {(inputs: Email_Comment_Admin_Root_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看评论`)
};

const en_email_comment_admin_root_action = /** @type {(inputs: Email_Comment_Admin_Root_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View Comment`)
};

/**
* | output |
* | --- |
* | "View Comment" |
*
* @param {Email_Comment_Admin_Root_ActionInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_admin_root_action = /** @type {((inputs?: Email_Comment_Admin_Root_ActionInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Admin_Root_ActionInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_admin_root_action(inputs)
	return zh_email_comment_admin_root_action(inputs)
});