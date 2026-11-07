/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ commenterName: NonNullable<unknown>, postTitle: NonNullable<unknown> }} Email_Comment_Admin_Root_IntroInputs */

const zh_email_comment_admin_root_intro = /** @type {(inputs: Email_Comment_Admin_Root_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} 在《${i?.postTitle}》下发表了评论：`)
};

const en_email_comment_admin_root_intro = /** @type {(inputs: Email_Comment_Admin_Root_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.commenterName} left a comment on "${i?.postTitle}":`)
};

/**
* | output |
* | --- |
* | "{commenterName} left a comment on \"{postTitle}\":" |
*
* @param {Email_Comment_Admin_Root_IntroInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const email_comment_admin_root_intro = /** @type {((inputs: Email_Comment_Admin_Root_IntroInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Email_Comment_Admin_Root_IntroInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_email_comment_admin_root_intro(inputs)
	return zh_email_comment_admin_root_intro(inputs)
});