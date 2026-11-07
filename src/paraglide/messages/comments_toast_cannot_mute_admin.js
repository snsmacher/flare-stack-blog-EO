/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Comments_Toast_Cannot_Mute_AdminInputs */

const zh_comments_toast_cannot_mute_admin = /** @type {(inputs: Comments_Toast_Cannot_Mute_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法禁言管理员账号`)
};

const en_comments_toast_cannot_mute_admin = /** @type {(inputs: Comments_Toast_Cannot_Mute_AdminInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cannot mute an administrator account`)
};

/**
* | output |
* | --- |
* | "Cannot mute an administrator account" |
*
* @param {Comments_Toast_Cannot_Mute_AdminInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_toast_cannot_mute_admin = /** @type {((inputs?: Comments_Toast_Cannot_Mute_AdminInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_Toast_Cannot_Mute_AdminInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_toast_cannot_mute_admin(inputs)
	return zh_comments_toast_cannot_mute_admin(inputs)
});