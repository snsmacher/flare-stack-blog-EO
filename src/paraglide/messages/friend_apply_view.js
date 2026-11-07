/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_ViewInputs */

const zh_friend_apply_view = /** @type {(inputs: Friend_Apply_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看友链`)
};

const en_friend_apply_view = /** @type {(inputs: Friend_Apply_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View friend links`)
};

/**
* | output |
* | --- |
* | "View friend links" |
*
* @param {Friend_Apply_ViewInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_view = /** @type {((inputs?: Friend_Apply_ViewInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_ViewInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_view(inputs)
	return zh_friend_apply_view(inputs)
});