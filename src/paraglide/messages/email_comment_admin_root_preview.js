/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ commenterName: NonNullable<unknown>, postTitle: NonNullable<unknown> }} Email_Comment_Admin_Root_PreviewInputs */

const zh_email_comment_admin_root_preview = /** @type {(inputs: Email_Comment_Admin_Root_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} 在《${i?.postTitle}》下发表了评论`)
};

const en_email_comment_admin_root_preview = /** @type {(inputs: Email_Comment_Admin_Root_PreviewInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} left a comment on "${i?.postTitle}"`)
};

/**
* | output |
* | --- |
* | "{commenterName} left a comment on \"{postTitle}\"" |
*
* @param {Email_Comment_Admin_Root_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_admin_root_preview = /** @type {((inputs: Email_Comment_Admin_Root_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Admin_Root_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_admin_root_preview(inputs)
	return zh_email_comment_admin_root_preview(inputs)
});