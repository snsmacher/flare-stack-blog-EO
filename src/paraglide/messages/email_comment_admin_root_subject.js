/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ postTitle: NonNullable<unknown> }} Email_Comment_Admin_Root_SubjectInputs */

const zh_email_comment_admin_root_subject = /** @type {(inputs: Email_Comment_Admin_Root_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[新评论] ${i?.postTitle}`)
};

const en_email_comment_admin_root_subject = /** @type {(inputs: Email_Comment_Admin_Root_SubjectInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`[New Comment] ${i?.postTitle}`)
};

/**
* | output |
* | --- |
* | "[New Comment] {postTitle}" |
*
* @param {Email_Comment_Admin_Root_SubjectInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_admin_root_subject = /** @type {((inputs: Email_Comment_Admin_Root_SubjectInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Admin_Root_SubjectInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_admin_root_subject(inputs)
	return zh_email_comment_admin_root_subject(inputs)
});