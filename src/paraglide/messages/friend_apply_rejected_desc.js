/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_Rejected_DescInputs */

const zh_friend_apply_rejected_desc = /** @type {(inputs: Friend_Apply_Rejected_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你可以修改站点信息后重新提交。`)
};

const en_friend_apply_rejected_desc = /** @type {(inputs: Friend_Apply_Rejected_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can revise your site details and submit again.`)
};

/**
* | output |
* | --- |
* | "You can revise your site details and submit again." |
*
* @param {Friend_Apply_Rejected_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_rejected_desc = /** @type {((inputs?: Friend_Apply_Rejected_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_Rejected_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_rejected_desc(inputs)
	return zh_friend_apply_rejected_desc(inputs)
});