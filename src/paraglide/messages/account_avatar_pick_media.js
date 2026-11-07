/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Account_Avatar_Pick_MediaInputs */

const zh_account_avatar_pick_media = /** @type {(inputs: Account_Avatar_Pick_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从媒体库选择`)
};

const en_account_avatar_pick_media = /** @type {(inputs: Account_Avatar_Pick_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose from media library`)
};

/**
* | output |
* | --- |
* | "Choose from media library" |
*
* @param {Account_Avatar_Pick_MediaInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const account_avatar_pick_media = /** @type {((inputs?: Account_Avatar_Pick_MediaInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Account_Avatar_Pick_MediaInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_account_avatar_pick_media(inputs)
	return zh_account_avatar_pick_media(inputs)
});