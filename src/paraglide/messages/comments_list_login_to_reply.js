/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ userName: NonNullable<unknown> }} Comments_List_Login_To_ReplyInputs */

const zh_comments_list_login_to_reply = /** @type {(inputs: Comments_List_Login_To_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`登录以回复 @${i?.userName}`)
};

const en_comments_list_login_to_reply = /** @type {(inputs: Comments_List_Login_To_ReplyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Login to reply to @${i?.userName}`)
};

/**
* | output |
* | --- |
* | "Login to reply to @{userName}" |
*
* @param {Comments_List_Login_To_ReplyInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const comments_list_login_to_reply = /** @type {((inputs: Comments_List_Login_To_ReplyInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Comments_List_Login_To_ReplyInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_comments_list_login_to_reply(inputs)
	return zh_comments_list_login_to_reply(inputs)
});