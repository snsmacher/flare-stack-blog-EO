/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_ApprovedInputs */

const zh_friend_apply_approved = /** @type {(inputs: Friend_Apply_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的站点已加入友链`)
};

const en_friend_apply_approved = /** @type {(inputs: Friend_Apply_ApprovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your site is now listed`)
};

/**
* | output |
* | --- |
* | "Your site is now listed" |
*
* @param {Friend_Apply_ApprovedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_approved = /** @type {((inputs?: Friend_Apply_ApprovedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_ApprovedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_approved(inputs)
	return zh_friend_apply_approved(inputs)
});