/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Overview_Comment_MuteInputs */

const zh_admin_overview_comment_mute = /** @type {(inputs: Admin_Overview_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁言该用户`)
};

const en_admin_overview_comment_mute = /** @type {(inputs: Admin_Overview_Comment_MuteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mute this user`)
};

/**
* | output |
* | --- |
* | "Mute this user" |
*
* @param {Admin_Overview_Comment_MuteInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_overview_comment_mute = /** @type {((inputs?: Admin_Overview_Comment_MuteInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Overview_Comment_MuteInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_overview_comment_mute(inputs)
	return zh_admin_overview_comment_mute(inputs)
});