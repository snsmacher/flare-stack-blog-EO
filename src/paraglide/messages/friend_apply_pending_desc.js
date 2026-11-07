/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Pending_DescInputs */

const zh_friend_apply_pending_desc = /** @type {(inputs: Friend_Apply_Pending_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的站点信息已收到，无需重复提交。`)
};

const en_friend_apply_pending_desc = /** @type {(inputs: Friend_Apply_Pending_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your site details have been received. No need to submit again.`)
};

/**
* | output |
* | --- |
* | "Your site details have been received. No need to submit again." |
*
* @param {Friend_Apply_Pending_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_pending_desc = /** @type {((inputs?: Friend_Apply_Pending_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Pending_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_pending_desc(inputs)
	return zh_friend_apply_pending_desc(inputs)
});