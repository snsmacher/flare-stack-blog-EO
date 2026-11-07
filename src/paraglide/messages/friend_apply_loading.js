/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_LoadingInputs */

const zh_friend_apply_loading = /** @type {(inputs: Friend_Apply_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在读取申请状态…`)
};

const en_friend_apply_loading = /** @type {(inputs: Friend_Apply_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading your application…`)
};

/**
* | output |
* | --- |
* | "Loading your application…" |
*
* @param {Friend_Apply_LoadingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_loading = /** @type {((inputs?: Friend_Apply_LoadingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_LoadingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_loading(inputs)
	return zh_friend_apply_loading(inputs)
});