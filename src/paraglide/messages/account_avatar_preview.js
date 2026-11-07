/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_Avatar_PreviewInputs */

const zh_account_avatar_preview = /** @type {(inputs: Account_Avatar_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`头像预览`)
};

const en_account_avatar_preview = /** @type {(inputs: Account_Avatar_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avatar preview`)
};

/**
* | output |
* | --- |
* | "Avatar preview" |
*
* @param {Account_Avatar_PreviewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_avatar_preview = /** @type {((inputs?: Account_Avatar_PreviewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_Avatar_PreviewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_avatar_preview(inputs)
	return zh_account_avatar_preview(inputs)
});