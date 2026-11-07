/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_RefreshInputs */

const zh_friend_apply_refresh = /** @type {(inputs: Friend_Apply_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`刷新状态`)
};

const en_friend_apply_refresh = /** @type {(inputs: Friend_Apply_RefreshInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refresh status`)
};

/**
* | output |
* | --- |
* | "Refresh status" |
*
* @param {Friend_Apply_RefreshInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_refresh = /** @type {((inputs?: Friend_Apply_RefreshInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_RefreshInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_refresh(inputs)
	return zh_friend_apply_refresh(inputs)
});